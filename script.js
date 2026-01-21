// Panda Radar - JavaScript for interactive panda map
class PandaRadar {
    constructor() {
        this.map = null;
        this.userLocation = null;
        this.pandaZoos = [];
        this.markers = [];
        this.init();
    }

    async init() {
        console.log('🚀 Starting Panda Radar initialization...');
        this.initMap();
        await this.loadPandaData();
        this.bindEvents();
        // Initialize zoo list even without geolocation
        this.updateZooList();
        console.log('✅ Initialization completed');
    }

    // Load data about zoos with pandas from JSON file
    async loadPandaData() {
        console.log('📁 Loading data from pandas.json...');
        
        // Try different paths to JSON file
        const possiblePaths = [
            './data/pandas.json',
            'data/pandas.json',
            '/data/pandas.json'
        ];
        
        for (const path of possiblePaths) {
            try {
                console.log(`🔍 Trying path: ${path}`);
                const response = await fetch(path);
                console.log('📡 Response status:', response.status, response.statusText);
                
                if (!response.ok) {
                    console.log(`❌ Path ${path} not working: ${response.status}`);
                    continue;
                }
                
                const data = await response.json();
                console.log('📊 Loaded data:', data);
                
                // Filter only active zoos and add to array
                this.pandaZoos = data.zoos.filter(zoo => zoo.status === 'active');
                console.log(`🐼 Found ${this.pandaZoos.length} active zoos with pandas`);
                
                // Calculate statistics from real data
                const totalZoos = this.pandaZoos.length;
                const totalPandas = this.pandaZoos.reduce((sum, zoo) => sum + zoo.pandas, 0);
                
                // Display metadata in console
                console.log(`🐼 Loaded ${totalZoos} zoos with ${totalPandas} pandas`);
                console.log(`📅 Last updated: ${data.metadata.lastUpdated}`);
                
                // Update footer with data information
                this.updateFooter(data.metadata);
                
                // Přidání markerů na mapu až po načtení dat
                if (this.map && this.pandaZoos.length > 0) {
                    console.log('🗺️ Map is ready, adding markers...');
                    this.addPandaMarkers();
                } else {
                    console.error('❌ Map is not initialized or no data');
                }
                
                this.updateStats();
                return; // Successfully loaded, exit
                
            } catch (error) {
                console.log(`❌ Error with path ${path}:`, error);
                continue;
            }
        }
        
        // No path worked
        console.error('❌ No working path to pandas.json!');
        console.error('❌ Application cannot work without panda data');
    }

    // Update footer with data information
    updateFooter(metadata) {
        const dataInfo = document.getElementById('dataInfo');
        if (dataInfo && metadata) {
            const formattedDate = new Date(metadata.lastUpdated).toLocaleDateString('en-US');
            dataInfo.innerHTML = `Updated: ${formattedDate} | Source: ${metadata.source}`;
        }
    }

    initMap() {
        // Initialize map with world view
        this.map = L.map('map').setView([50.0833, 14.4167], 6);

        // Add tile layer with nice styling
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors | 🐼 Panda Radar',
            maxZoom: 18
        }).addTo(this.map);

        // Markers will be added after data loading in loadPandaData()
    }

    addPandaMarkers() {
        console.log(`🗺️ Adding ${this.pandaZoos.length} markers to map`);
        
        // Clear existing markers
        this.markers.forEach(item => {
            this.map.removeLayer(item.marker);
        });
        this.markers = [];
        
        this.pandaZoos.forEach((zoo, index) => {
            console.log(`📍 Marker ${index + 1}: ${zoo.name} at [${zoo.lat}, ${zoo.lng}]`);
            
            // Ověření platnosti souřadnic
            if (!zoo.lat || !zoo.lng || isNaN(zoo.lat) || isNaN(zoo.lng)) {
                console.error(`❌ Invalid coordinates for ${zoo.name}:`, zoo.lat, zoo.lng);
                return;
            }
            
            // Regular reliable marker - emoji cause problems
            const marker = L.marker([zoo.lat, zoo.lng])
                .addTo(this.map);
            
            console.log(`✅ Panda marker ${index + 1} added at position [${zoo.lat}, ${zoo.lng}]`);

            // Popup s informacemi o zoo
            const pandaEmojis = '🐼'.repeat(Math.min(zoo.pandas, 10)); // Max 10 emoji
            const popupContent = `
                <div class="popup-title">${zoo.name}</div>
                <div class="popup-pandas">${pandaEmojis} ${zoo.pandas} ${zoo.pandas === 1 ? 'panda' : 'pandas'}</div>
                <div class="popup-location">📍 ${zoo.location}</div>
            `;

            marker.bindPopup(popupContent);

            // Kliknutí pro detailní modal
            marker.on('click', () => {
                this.showZooDetails(zoo);
            });

            this.markers.push({ marker, zoo });
        });
        
        console.log(`✅ Added ${this.markers.length} panda markers to map`);
        
        // Test first marker after 2 seconds
        if (this.markers.length > 0) {
            setTimeout(() => {
                console.log('🧪 Test: Opening popup of first marker...');
                const firstMarker = this.markers[0];
                this.map.setView([firstMarker.zoo.lat, firstMarker.zoo.lng], 8);
                firstMarker.marker.openPopup();
            }, 2000);
        }
    }

    showZooDetails(zoo) {
        const modal = document.getElementById('pandaModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalBody = document.getElementById('modalBody');

        modalTitle.textContent = `🐼 ${zoo.name}`;
        
        // Panda emoji podle počtu pand (max 15)
        const pandaEmojis = '🐼'.repeat(Math.min(zoo.pandas, 15));
        
        modalBody.innerHTML = `
            <div class="panda-info">
                <div class="info-item">
                    <span class="info-icon">🐼</span>
                    <div class="info-text">
                        <div class="info-label">Panda count:</div>
                        <div class="info-value">${pandaEmojis}<br>${zoo.pandas} ${zoo.pandas === 1 ? 'panda' : 'pandas'}</div>
                    </div>
                </div>
                <div class="info-item">
                    <span class="info-icon">📍</span>
                    <div class="info-text">
                        <div class="info-label">Location:</div>
                        <div class="info-value">${zoo.location}</div>
                    </div>
                </div>
                ${zoo.pandaNames ? `
                <div class="info-item">
                    <span class="info-icon">🏷️</span>
                    <div class="info-text">
                        <div class="info-label">Panda names:</div>
                        <div class="info-value">${zoo.pandaNames.join(', ')}</div>
                    </div>
                </div>
                ` : ''}
                <div class="info-item">
                    <span class="info-icon">🌟</span>
                    <div class="info-text">
                        <div class="info-label">Specialty:</div>
                        <div class="info-value">${zoo.details}</div>
                    </div>
                </div>
                ${zoo.established ? `
                <div class="info-item">
                    <span class="info-icon">📅</span>
                    <div class="info-text">
                        <div class="info-label">Pandas since:</div>
                        <div class="info-value">${zoo.established}</div>
                    </div>
                </div>
                ` : ''}
                ${zoo.contract ? `
                <div class="info-item">
                    <span class="info-icon">📋</span>
                    <div class="info-text">
                        <div class="info-label">Contract:</div>
                        <div class="info-value">${zoo.contract}</div>
                    </div>
                </div>
                ` : ''}
                ${this.userLocation ? `
                <div class="info-item">
                    <span class="info-icon">🛣️</span>
                    <div class="info-text">
                        <div class="info-label">Distance:</div>
                        <div class="info-value">${this.calculateDistance(this.userLocation.lat, this.userLocation.lng, zoo.lat, zoo.lng).toFixed(0)} km</div>
                    </div>
                </div>
                ` : ''}
            </div>
        `;

        modal.style.display = 'block';
    }

    bindEvents() {
        // Tlačítko pro nalezení uživatelovy polohy
        document.getElementById('findMe').addEventListener('click', () => {
            this.findUserLocation();
        });

        // Button to show all pandas
        document.getElementById('showAll').addEventListener('click', () => {
            this.showAllPandas();
        });

        // Close modal
        document.querySelector('.close').addEventListener('click', () => {
            document.getElementById('pandaModal').style.display = 'none';
        });

        // Close modal by clicking outside
        window.addEventListener('click', (e) => {
            const modal = document.getElementById('pandaModal');
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    findUserLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.userLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };

                    // Přidání markeru uživatelovy polohy
                    if (this.userMarker) {
                        this.map.removeLayer(this.userMarker);
                    }

                    const userIcon = L.divIcon({
                        className: 'user-marker',
                        html: '📍',
                        iconSize: [30, 30],
                        iconAnchor: [15, 15]
                    });

                    this.userMarker = L.marker([this.userLocation.lat, this.userLocation.lng], { icon: userIcon })
                        .addTo(this.map)
                        .bindPopup('🏠 You are here!')
                        .openPopup();

                    // Center map on user
                    this.map.setView([this.userLocation.lat, this.userLocation.lng], 6);

                    // Update zoo list by distance
                    this.updateZooList();
                    this.updateStats();
                },
                (error) => {
                    alert('Could not determine your location: ' + error.message);
                }
            );
        } else {
            alert('Your browser does not support geolocation 😢');
        }
    }

    showAllPandas() {
        // Create bounds for all pandas
        if (this.markers && this.markers.length > 0) {
            const group = new L.featureGroup(this.markers.map(m => m.marker));
            this.map.fitBounds(group.getBounds().pad(0.1));
        } else {
            // Fallback - zoom to global view
            this.map.setView([30, 0], 2);
        }
    }

    updateZooList() {
        const zooListContainer = document.getElementById('zooList');
        
        let zooList = [...this.pandaZoos];
        
        // Sort by distance if we have user location
        if (this.userLocation) {
            zooList = zooList.sort((a, b) => {
                const distanceA = this.calculateDistance(this.userLocation.lat, this.userLocation.lng, a.lat, a.lng);
                const distanceB = this.calculateDistance(this.userLocation.lat, this.userLocation.lng, b.lat, b.lng);
                return distanceA - distanceB;
            });
        } else {
            // Sort by panda count (most first)
            zooList = zooList.sort((a, b) => b.pandas - a.pandas);
        }

        zooListContainer.innerHTML = zooList.map(zoo => {
            const distance = this.userLocation ? 
                this.calculateDistance(this.userLocation.lat, this.userLocation.lng, zoo.lat, zoo.lng) : null;
            
            const pandaNamesDisplay = zoo.pandaNames && zoo.pandaNames.length > 0 ?
                `<div class="zoo-names">🏷️ ${zoo.pandaNames.join(', ')}</div>` : '';
            
            const distanceDisplay = distance ? 
                `<div class="zoo-distance">🛣️ ${distance.toFixed(0)} km from you</div>` :
                `<div class="zoo-continent">🌍 ${zoo.continent || 'World'}</div>`;
                
            return `
                <div class="zoo-item" onclick="pandaRadar.focusOnZoo('${zoo.name}')">
                    <div class="zoo-name">🐼 ${zoo.name}</div>
                    <div class="zoo-location">📍 ${zoo.location}</div>
                    <div class="zoo-pandas">🐾 ${zoo.pandas} ${zoo.pandas === 1 ? 'panda' : 'pandas'}</div>
                    ${pandaNamesDisplay}
                    ${distanceDisplay}
                </div>
            `;
        }).join('');
        
        // If no geolocation, show tip
        if (!this.userLocation) {
            zooListContainer.innerHTML = `
                <div class="loading">
                    Click "📍 Find My Location" to sort by distance! 🐾
                </div>
            ` + zooListContainer.innerHTML;
        }
    }

    focusOnZoo(zooName) {
        const zoo = this.pandaZoos.find(z => z.name === zooName);
        if (zoo) {
            this.map.setView([zoo.lat, zoo.lng], 12);
            
            // Find marker and open popup
            const markerData = this.markers.find(m => m.zoo.name === zooName);
            if (markerData) {
                markerData.marker.openPopup();
            }
        }
    }

    updateStats() {
        const totalZoos = this.pandaZoos.length;
        const totalPandas = this.pandaZoos.reduce((sum, zoo) => sum + zoo.pandas, 0);
        
        document.getElementById('totalZoos').textContent = totalZoos;
        document.getElementById('totalPandas').textContent = totalPandas;

        if (this.userLocation) {
            const distances = this.pandaZoos
                .filter(zoo => zoo.pandas > 0)
                .map(zoo => this.calculateDistance(this.userLocation.lat, this.userLocation.lng, zoo.lat, zoo.lng));
            const nearestDistance = Math.min(...distances);
            document.getElementById('nearestDistance').textContent = nearestDistance.toFixed(0);
        }
    }

    // Calculate distance between two points (Haversine formula)
    calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 6371; // Earth radius in km
        const dLat = this.deg2rad(lat2 - lat1);
        const dLon = this.deg2rad(lon2 - lon1);
        const a = 
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
            Math.sin(dLon/2) * Math.sin(dLon/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return R * c;
    }

    deg2rad(deg) {
        return deg * (Math.PI/180);
    }
}

// Initialize application after page load
document.addEventListener('DOMContentLoaded', async () => {
    console.log('📄 DOM loaded, starting application...');
    
    // Show loading state
    const zooList = document.getElementById('zooList');
    zooList.innerHTML = `
        <div class="loading">
            <div style="font-size: 2rem; margin-bottom: 10px;">🐼</div>
            Loading latest panda data... 🌍
        </div>
    `;
    
    // Initialize application
    window.pandaRadar = new PandaRadar();
    
    // Test markers after 3 seconds
    setTimeout(() => {
        console.log('🧪 TEST: Checking markers after 3 seconds...');
        if (window.pandaRadar.markers.length > 0) {
            console.log(`✅ Found ${window.pandaRadar.markers.length} markers on map`);
        } else {
            console.log('❌ No markers found!');
            console.log('🔍 Trying to add test marker...');
            
            // Add test marker
            if (window.pandaRadar.map) {
                const testMarker = L.marker([50.0833, 14.4167]).addTo(window.pandaRadar.map);
                testMarker.bindPopup('🧪 Test marker - Prague');
                console.log('✅ Test marker added');
            }
        }
    }, 3000);
});

// Add special effects for extra cuteness
document.addEventListener('DOMContentLoaded', () => {
    // Snow flakes as bamboo leaves 🎋
    function createBambusLeaf() {
        const leaf = document.createElement('div');
        leaf.innerHTML = '🎋';
        leaf.style.position = 'fixed';
        leaf.style.top = '-50px';
        leaf.style.left = Math.random() * window.innerWidth + 'px';
        leaf.style.fontSize = '20px';
        leaf.style.pointerEvents = 'none';
        leaf.style.zIndex = '1000';
        leaf.style.animation = `fall ${3 + Math.random() * 4}s linear forwards`;
        
        document.body.appendChild(leaf);
        
        setTimeout(() => {
            leaf.remove();
        }, 7000);
    }

    // CSS animation for falling bamboo
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fall {
            to {
                transform: translateY(${window.innerHeight + 100}px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Start bamboo animation every 5 seconds
    setInterval(createBambusLeaf, 5000);
});
// Panda Radar - JavaScript pro interaktivní mapu pand
class PandaRadar {
    constructor() {
        this.map = null;
        this.userLocation = null;
        this.pandaZoos = [];
        this.markers = [];
        this.init();
    }

    init() {
        this.loadPandaData();
        this.initMap();
        this.bindEvents();
    }

    // Data o zoo s pandami (reálná data)
    loadPandaData() {
        this.pandaZoos = [
            {
                name: "Zoo Berlin",
                location: "Berlín, Německo",
                lat: 52.5085,
                lng: 13.3376,
                pandas: 2,
                details: "Meng Meng a Jiao Qing - nejslavnější panda pár v Evropě! 🐼💕"
            },
            {
                name: "Schönbrunn Zoo",
                location: "Vídeň, Rakousko", 
                lat: 48.1825,
                lng: 16.3023,
                pandas: 2,
                details: "Yang Yang a Yuan Yuan žijí v krásném pavilonu s bambusovým hájem! 🎋"
            },
            {
                name: "Zoo Praha",
                location: "Praha, Česká republika",
                lat: 50.1167,
                lng: 14.4167,
                pandas: 0,
                details: "Bohužel momentálne žádné pandy, ale plánuje se jejich návrat! 🤞"
            },
            {
                name: "Pairi Daiza",
                location: "Brugelette, Belgie",
                lat: 50.5833,
                lng: 3.8667,
                pandas: 4,
                details: "Hao Hao, Xing Hui a jejich mláďata! Největší panda kolonie v Evropě! 🐼👨‍👩‍👧‍👦"
            },
            {
                name: "Zoo de Beauval",
                location: "Saint-Aignan, Francie",
                lat: 47.2667,
                lng: 1.3667,
                pandas: 4,
                details: "Huan Huan, Yuan Zi a jejich dvojčata! Jediná zoo ve Francii s pandami! 🇫🇷🐼"
            },
            {
                name: "Edinburgh Zoo",
                location: "Edinburgh, Skotsko",
                lat: 55.9414,
                lng: -3.2678,
                pandas: 2,
                details: "Tian Tian a Yang Guang obývají nádherný Land of the Living Legends! 🏴󠁧󠁢󠁳󠁣󠁴󠁿"
            },
            {
                name: "Zoo Madrid",
                location: "Madrid, Španělsko",
                lat: 40.4086,
                lng: -3.7573,
                pandas: 3,
                details: "Bing Xing, Hua Zui Ba a Po - španělská panda rodina! 🇪🇸"
            },
            {
                name: "Moscow Zoo",
                location: "Moskva, Rusko",
                lat: 55.7614,
                lng: 37.5753,
                pandas: 3,
                details: "Ru Yi, Ding Ding a jejich mládě žijí v moderním pavilonu! 🇷🇺"
            },
            {
                name: "San Diego Zoo",
                location: "San Diego, USA",
                lat: 32.7353,
                lng: -117.1490,
                pandas: 4,
                details: "Domov nejúspěšnějšího panda programu! Bai Yun legendy! 🇺🇸"
            },
            {
                name: "National Zoo Washington",
                location: "Washington D.C., USA", 
                lat: 38.9286,
                lng: -77.0498,
                pandas: 3,
                details: "Tian Tian, Mei Xiang a Xiao Qi Ji - americké panda hvězdy! ⭐"
            },
            {
                name: "Chengdu Research Base",
                location: "Chengdu, Čína",
                lat: 30.6736,
                lng: 104.1034,
                pandas: 200,
                details: "Mekka všech milovníků pand! Více než 200 pand v přirozeném prostředí! 🏮"
            },
            {
                name: "Wolong Panda Reserve",
                location: "Sichuan, Čína",
                lat: 30.8647,
                lng: 103.1653,
                pandas: 150,
                details: "Největší panda rezervace na světě v srdci hor Sichuan! 🏔️"
            },
            {
                name: "Ueno Zoo",
                location: "Tokio, Japonsko",
                lat: 35.7156,
                lng: 139.7719,
                pandas: 3,
                details: "Ri Ri, Shin Shin a Xiang Xiang - japonští panda miláčci! 🇯🇵"
            },
            {
                name: "Adventure World",
                location: "Wakayama, Japonsko",
                lat: 33.6833,
                lng: 135.3667,
                pandas: 6,
                details: "Nejúspěšnější panda chov mimo Čínu! Safari s pandami! 🚗"
            },
            {
                name: "Zoo Negara",
                location: "Kuala Lumpur, Malajsie",
                lat: 3.2067,
                lng: 101.7544,
                pandas: 2,
                details: "Liang Liang a Xing Xing v tropickém ráji! 🌴"
            },
            {
                name: "Adelaide Zoo", 
                location: "Adelaide, Austrálie",
                lat: -34.9167,
                lng: 138.6051,
                pandas: 2,
                details: "Wang Wang a Funi - jediné pandy v jižní polokouli! 🇦🇺"
            }
        ];

        this.updateStats();
    }

    initMap() {
        // Inicializace mapy se světovým pohledem
        this.map = L.map('map').setView([50.0833, 14.4167], 6);

        // Přidání tile layer s pěkným stylem
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors | 🐼 Panda Radar',
            maxZoom: 18
        }).addTo(this.map);

        // Přidání všech panda markerů
        this.addPandaMarkers();
    }

    addPandaMarkers() {
        this.pandaZoos.forEach(zoo => {
            // Vytvoření custom HTML markeru s panda emoji
            const pandaIcon = L.divIcon({
                className: 'panda-marker',
                html: zoo.pandas > 0 ? '🐼' : '🐾',
                iconSize: [40, 40],
                iconAnchor: [20, 20]
            });

            // Vytvoření markeru
            const marker = L.marker([zoo.lat, zoo.lng], { icon: pandaIcon })
                .addTo(this.map);

            // Popup s informacemi o zoo
            const popupContent = `
                <div class="popup-title">${zoo.name}</div>
                <div class="popup-pandas">🐼 ${zoo.pandas} ${zoo.pandas === 1 ? 'panda' : zoo.pandas < 5 ? 'pandy' : 'pand'}</div>
                <div class="popup-location">📍 ${zoo.location}</div>
            `;

            marker.bindPopup(popupContent);

            // Kliknutí pro detailní modal
            marker.on('click', () => {
                this.showZooDetails(zoo);
            });

            this.markers.push({ marker, zoo });
        });
    }

    showZooDetails(zoo) {
        const modal = document.getElementById('pandaModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalBody = document.getElementById('modalBody');

        modalTitle.textContent = `🐼 ${zoo.name}`;
        
        modalBody.innerHTML = `
            <div class="panda-info">
                <div class="info-item">
                    <span class="info-icon">🐼</span>
                    <div class="info-text">
                        <div class="info-label">Počet pand:</div>
                        <div class="info-value">${zoo.pandas} ${zoo.pandas === 1 ? 'panda' : zoo.pandas < 5 ? 'pandy' : 'pand'}</div>
                    </div>
                </div>
                <div class="info-item">
                    <span class="info-icon">📍</span>
                    <div class="info-text">
                        <div class="info-label">Lokace:</div>
                        <div class="info-value">${zoo.location}</div>
                    </div>
                </div>
                <div class="info-item">
                    <span class="info-icon">🌟</span>
                    <div class="info-text">
                        <div class="info-label">Specialita:</div>
                        <div class="info-value">${zoo.details}</div>
                    </div>
                </div>
                ${this.userLocation ? `
                <div class="info-item">
                    <span class="info-icon">🛣️</span>
                    <div class="info-text">
                        <div class="info-label">Vzdálenost:</div>
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

        // Tlačítko pro zobrazení všech pand
        document.getElementById('showAll').addEventListener('click', () => {
            this.showAllPandas();
        });

        // Zavření modalu
        document.querySelector('.close').addEventListener('click', () => {
            document.getElementById('pandaModal').style.display = 'none';
        });

        // Zavření modalu kliknutím mimo něj
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
                        .bindPopup('🏠 Jste zde!')
                        .openPopup();

                    // Centrování mapy na uživatele
                    this.map.setView([this.userLocation.lat, this.userLocation.lng], 6);

                    // Aktualizace seznamu zoo podle vzdálenosti
                    this.updateZooList();
                    this.updateStats();
                },
                (error) => {
                    alert('Nepodařilo se zjistit vaší polohu: ' + error.message);
                }
            );
        } else {
            alert('Váš prohlížeč nepodporuje geolokaci 😢');
        }
    }

    showAllPandas() {
        // Vytvoření bounds pro všechny pandy
        const group = new L.featureGroup(this.markers.map(m => m.marker));
        this.map.fitBounds(group.getBounds().pad(0.1));
    }

    updateZooList() {
        const zooListContainer = document.getElementById('zooList');
        
        if (!this.userLocation) {
            zooListContainer.innerHTML = `
                <div class="loading">
                    Klikněte na "📍 Najdi moji polohu" pro seřazení podle vzdálenosti! 🐾
                </div>
            `;
            return;
        }

        // Seřazení zoo podle vzdálenosti
        const sortedZoos = [...this.pandaZoos].sort((a, b) => {
            const distanceA = this.calculateDistance(this.userLocation.lat, this.userLocation.lng, a.lat, a.lng);
            const distanceB = this.calculateDistance(this.userLocation.lat, this.userLocation.lng, b.lat, b.lng);
            return distanceA - distanceB;
        });

        zooListContainer.innerHTML = sortedZoos.map(zoo => {
            const distance = this.calculateDistance(this.userLocation.lat, this.userLocation.lng, zoo.lat, zoo.lng);
            return `
                <div class="zoo-item" onclick="pandaRadar.focusOnZoo('${zoo.name}')">
                    <div class="zoo-name">🐼 ${zoo.name}</div>
                    <div class="zoo-location">📍 ${zoo.location}</div>
                    <div class="zoo-pandas">🐾 ${zoo.pandas} ${zoo.pandas === 1 ? 'panda' : zoo.pandas < 5 ? 'pandy' : 'pand'}</div>
                    <div class="zoo-distance">🛣️ ${distance.toFixed(0)} km od vás</div>
                </div>
            `;
        }).join('');
    }

    focusOnZoo(zooName) {
        const zoo = this.pandaZoos.find(z => z.name === zooName);
        if (zoo) {
            this.map.setView([zoo.lat, zoo.lng], 12);
            
            // Najdi marker a otevři popup
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

    // Výpočet vzdálenosti mezi dvěma body (Haversine formula)
    calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 6371; // Poloměr Země v km
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

// Inicializace aplikace po načtení stránky
document.addEventListener('DOMContentLoaded', () => {
    window.pandaRadar = new PandaRadar();
});

// Přidání speciálních efektů pro extra roztomilost
document.addEventListener('DOMContentLoaded', () => {
    // Sněhové vločky jako bambus listy 🎋
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

    // CSS animace pro padající bambus
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

    // Spouštění bambus animace každých 5 sekund
    setInterval(createBambusLeaf, 5000);
});
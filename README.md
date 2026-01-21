> *🎨 Vibe Coding Experiment*

# Panda Radar 🐼

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://jechtom.github.io/panda-radar)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A cute web application for panda lovers that displays zoos with pandas around the world on an interactive map!

## 🌟 Demo

**Live application:** https://jechtom.github.io/panda-radar

## ✨ Features

- 🗺️ **Interactive map** with panda emoji markers
- 📍 **Geolocation** - finds your location and sorts zoos by distance  
- 🐾 **Detailed information** about each panda zoo
- 📊 **Statistics** - total number of zoos and pandas
- 📱 **Responsive design** for mobile and tablets
- 🎋 **Cute animations** including falling bamboo leaves
- 🌍 **Global coverage** - panda data from around the world

## 🚀 Quick Start

### Online version
Visit: https://jechtom.github.io/panda-radar

### Local setup
```bash
git clone https://github.com/jechtom/panda-radar.git
cd panda-radar
# Open index.html in browser or run local server
python -m http.server 8000
# Or use Live Server in VS Code
``` 

## 🎯 Included Panda Zoos

The application contains data about more than 15 zoos with pandas:

### 🇪🇺 Europe
- **Zoo Berlin** (Germany) - Meng Meng and Jiao Qing
- **Schönbrunn Zoo** (Austria) - Yang Yang and Yuan Yuan  
- **Pairi Daiza** (Belgium) - largest European panda colony
- **Zoo de Beauval** (France) - only zoo in France with pandas
- **Edinburgh Zoo** (Scotland) - Tian Tian and Yang Guang
- **Zoo Madrid** (Spain) - Spanish panda family
- **Moscow Zoo** (Russia) - modern panda pavilion

### 🌏 Asia  
- **Chengdu Research Base** (China) - more than 200 pandas!
- **Wolong Panda Reserve** (China) - largest reserve
- **Ueno Zoo** (Japan) - Japanese panda favorites
- **Adventure World** (Japan) - most successful breeding outside China
- **Zoo Negara** (Malaysia) - pandas in the tropics

### 🌎 Other Continents
- **San Diego Zoo** (USA) - legendary panda program
- **National Zoo Washington** (USA) - American panda stars  
- **Adelaide Zoo** (Australia) - only pandas in southern hemisphere

## 🎯 About the Project

### Vibe Coding Philosophy
This project is an example of **"vibe coding"** - programming with emphasis on:
- ⚡ **Rapid prototyping** - from idea to functional application
- 🎨 **Creative design** - cute animations and panda theming  
- 🚀 **Modern technologies** - clean vanilla JS, CSS3, HTML5
- 💚 **Positive energy** - code written with love for pandas!
- 🌱 **Experimentation** - trying new approaches and ideas

### Technical Approach
- **No build tools** - simple files ready for immediate execution
- **Minimal dependencies** - only Leaflet.js for maps
- **Progressive enhancement** - works even without JavaScript (basic display)
- **Mobile-first design** - responsive from the ground up
- **Accessibility friendly** - semantic HTML and keyboard navigation

## � Tech Stack

**Frontend:**
- **HTML5** - semantic structure with accessibility
- **CSS3** - gradient backgrounds, animations, responsive design
- **Vanilla JavaScript ES6+** - no dependencies, clean code!
- **Leaflet.js** - interactive maps (only external dependency)

**Services & APIs:**
- **OpenStreetMap** - map data (open source)
- **Google Fonts** - typography (Fredoka font)
- **Geolocation API** - user location detection
- **GitHub Pages** - hosting and continuous deployment

**Development Philosophy:**
- 🚫 No build tools or bundlers
- 🚫 No frameworks (React, Vue, Angular)
- ✅ Vanilla everything - fast, lightweight, straightforward
- ✅ Progressive Web App ready
- ✅ SEO optimized

## 📁 Project Structure

```
panda-radar/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript logic
├── data/
│   └── pandas.json     # Current panda zoo data (Wikipedia)
├── README.md           # Documentation
├── LICENSE             # MIT license
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions for automatic deployment
├── assets/
│   └── screenshot.png  # Application screenshot
└── docs/
    └── CONTRIBUTING.md # Contributor guide
```

## 🚀 GitHub Pages Deployment

1. **Fork or clone** this repository
2. **Push changes** to main branch
3. **Enable GitHub Pages** in repository settings
4. Application will automatically deploy to `https://yourusername.github.io/panda-radar`

### Automatic Deployment

The project includes a GitHub Actions workflow that automatically deploys the application on every push to the main branch.

## 🤝 Contributing

We welcome contributions! Check out [CONTRIBUTING.md](docs/CONTRIBUTING.md) for more information.

### How to add a new panda zoo:

1. Open [`data/pandas.json`](data/pandas.json)
2. Find the `zoos` array 
3. Add a new object with zoo information:
   ```json
   {
     "id": "unique_zoo_id",
     "name": "Zoo Name",
     "location": "City, Country",
     "country": "Country",
     "continent": "Europe/Asia/North America/Australia",
     "lat": 50.1234,
     "lng": 14.5678,
     "pandas": 2,
     "status": "active",
     "details": "Interesting panda information! 🐼",
     "pandaNames": ["Name 1", "Name 2"],
     "established": 2024,
     "contract": "loan from China"
   }
   ```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file.

## 🎨 Design

The application uses a cheerful color palette with gradient backgrounds, rounded corners, and subtle shadows. All elements have panda/bamboo theming with cute emoji and animations.

## 📱 Responsive Design

- **Desktop** - two-column layout with map and sidebar
- **Tablet** - adaptive layout with flexible columns  
- **Mobile** - simple stack layout with touch-friendly controls

## � Kontakt

Máte nápad na vylepšení? Našli jste chybu? Vytvořte [issue](https://github.com/jechtom/panda-radar/issues) nebo pošlete pull request!

## 🐼 For Panda Lovers

Each zoo has detailed information about its pandas including names, count, and specialties. The application also contains easter eggs like falling bamboo leaves and animated panda emoji!

---

*Created with 💚 for all panda lovers during an experimental coding session!* 🐼

**Fun Fact:** Did you know that pandas spend up to 14 hours a day eating? 🎋  
**Vibe Fact:** This project was coded with love for pandas and experimental programming! ✨
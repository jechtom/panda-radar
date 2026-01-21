> **🎨 Vibe Coding Experiment**  

# Panda Radar 🐼

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://yourusername.github.io/panda-radar)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Roztomilá webová aplikace pro milovníky pand, která zobrazuje na interaktivní mapě zoologické zahrady s pandami po celém světě!

## 🌟 Demo

**Živá aplikace:** https://yourusername.github.io/panda-radar

![Panda Radar Screenshot](assets/screenshot.png)

## ✨ Funkce

- 🗺️ **Interaktivní mapa** s panda emoji markery
- 📍 **Geolokace** - najde vaší polohu a seřadí zoo podle vzdálenosti  
- 🐾 **Detailní informace** o každé zoo s pandami
- 📊 **Statistiky** - celkový počet zoo a pand
- 📱 **Responzivní design** pro mobily a tablety
- 🎋 **Roztomilé animace** včetně padajících bambusových listů
- 🌍 **Světové pokrytí** - data o pandách z celého světe

## 🚀 Rychlé spuštění

### Online verze
Navštivte: https://yourusername.github.io/panda-radar

### Lokální spuštění
```bash
git clone https://github.com/yourusername/panda-radar.git
cd panda-radar
# Otevřete index.html v prohlížeči nebo spusťte lokální server
python -m http.server 8000
# Nebo použijte Live Server v VS Code
``` 

## 🎯 Zahrnuté zoo s pandami

Aplikace obsahuje data o více než 15 zoologických zahradách s pandami:

### 🇪🇺 Evropa
- **Zoo Berlin** (Německo) - Meng Meng a Jiao Qing
- **Schönbrunn Zoo** (Rakousko) - Yang Yang a Yuan Yuan  
- **Pairi Daiza** (Belgie) - největší evropská kolonie pand
- **Zoo de Beauval** (Francie) - jediná zoo ve Francii s pandami
- **Edinburgh Zoo** (Skotsko) - Tian Tian a Yang Guang
- **Zoo Madrid** (Španělsko) - španělská panda rodina
- **Moscow Zoo** (Rusko) - moderní panda pavilon

### 🌏 Asie  
- **Chengdu Research Base** (Čína) - více než 200 pand!
- **Wolong Panda Reserve** (Čína) - největší rezervace
- **Ueno Zoo** (Japonsko) - japonští panda miláčci
- **Adventure World** (Japonsko) - nejúspěšnější chov mimo Čínu
- **Zoo Negara** (Malajsie) - pandy v tropech

### 🌎 Ostatní kontinenty
- **San Diego Zoo** (USA) - legendární panda program
- **National Zoo Washington** (USA) - americké panda hvězdy  
- **Adelaide Zoo** (Austrálie) - jediné pandy v jižní polokouli

## 🎯 O projektu

### Vibe Coding Philosophy
Tento projekt je příkladem **"vibe coding"** - programování s důrazem na:
- ⚡ **Rychlost prototypování** - od nápadu k funkční aplikaci
- 🎨 **Kreativní design** - roztomilé animace a panda tématika  
- 🚀 **Moderní technologie** - čistý vanilla JS, CSS3, HTML5
- 💚 **Pozitivní energie** - kód psaný s láskou k pandám!
- 🌱 **Experimentování** - zkoušení nových přístupů a nápadů

### Technický přístup
- **Žádné build tools** - jednoduché soubory připravené k okamžitému spuštění
- **Minimal dependencies** - pouze Leaflet.js pro mapy
- **Progressive enhancement** - funguje i bez JavaScriptu (základní zobrazení)
- **Mobile-first design** - responzivní od základu
- **Accessibility friendly** - sémantické HTML a klávesové ovládání

## � Tech Stack

**Frontend:**
- **HTML5** - sémantická struktura s accessibility
- **CSS3** - gradient pozadí, animace, responzivní design
- **Vanilla JavaScript ES6+** - žádné závislosti, čistý kód!
- **Leaflet.js** - interaktivní mapy (jediná externí závislost)

**Services & APIs:**
- **OpenStreetMap** - mapová data (open source)
- **Google Fonts** - typography (Fredoka font)
- **Geolocation API** - zjištění polohy uživatele
- **GitHub Pages** - hosting a continuous deployment

**Development Philosophy:**
- 🚫 Žádné build tools nebo bundlers
- 🚫 Žádné frameworks (React, Vue, Angular)
- ✅ Vanilla everything - rychlé, lehké, přímočaré
- ✅ Progressive Web App ready
- ✅ SEO optimized

## �📁 Struktura projektu

```
panda-radar/
├── index.html          # Hlavní HTML soubor
├── styles.css          # CSS styly
├── script.js           # JavaScript logika
├── README.md           # Dokumentace
├── LICENSE             # MIT licence
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions pro automatické nasazení
├── assets/
│   └── screenshot.png  # Screenshot aplikace
└── docs/
    └── CONTRIBUTING.md # Návod pro přispěvatele
```

## 🚀 Nasazení na GitHub Pages

1. **Forkněte nebo klonujte** tento repozitář
2. **Pushněte změny** do main branche
3. **Povolte GitHub Pages** v nastavení repozitáře
4. Aplikace se automaticky nasadí na `https://yourusername.github.io/panda-radar`

### Automatické nasazení

Projekt obsahuje GitHub Actions workflow, který automaticky nasadí aplikaci při každém push do main branche.

## 🤝 Přispívání

Rádi uvítáme příspěvky! Podívejte se na [CONTRIBUTING.md](docs/CONTRIBUTING.md) pro více informací.

### Jak přidat novou zoo s pandami:

1. Otevřete `script.js`
2. Najděte pole `pandaZoos`
3. Přidejte nový objekt s informacemi o zoo:
   ```javascript
   {
       name: "Název Zoo",
       location: "Město, Země",
       lat: 50.1234,    // GPS souřadnice
       lng: 14.5678,
       pandas: 2,       // Počet pand
       details: "Zajímavé informace o pandách v této zoo! 🐼"
   }
   ```

## 📝 Licence

Tento projekt je licencován pod MIT licencí - viz [LICENSE](LICENSE) soubor.

## 🎨 Design

Aplikace používá veselou barevnou paletu s gradient pozadími, zaoblenými rohy a jemnými stíny. Všechny elementy mají panda/bambus tématiku s roztomilými emoji a animacemi.

## 📱 Responzivní design

- **Desktop** - dvousloupcové rozložení s mapou a postranním panelem
- **Tablet** - adaptivní rozložení s flexibilními sloupci  
- **Mobil** - jednoduchý stack layout s touch-friendly kontrolami

## � Kontakt

Máte nápad na vylepšení? Našli jste chybu? Vytvořte [issue](https://github.com/yourusername/panda-radar/issues) nebo pošlete pull request!

## 🐼 Pro milovníky pand

Každá zoo má detailní informace o svých pandách včetně jmen, počtu a specialit. Aplikace také obsahuje easter eggs jako padající bambusové listy a animující panda emoji!

---

*Vytvořeno s 💚 pro všechny milovníky pand během experimentální coding session!* 🐼

**Fun Fact:** Věděli jste, že pandy tráví jedením až 14 hodin denně? 🎋  
**Vibe Fact:** Tento projekt byl nakódován s láskou k pandám a experimentálnímu programování! ✨
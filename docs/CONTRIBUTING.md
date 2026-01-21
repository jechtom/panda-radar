# Contributing to Panda Radar 🐼

Thank you for your interest in contributing to Panda Radar! Every contribution is welcome, whether it's bug reports, feature suggestions, or direct code contributions.

## 🚀 How to Contribute

### 1. Bug Reports
If you find a bug, please create an [issue](https://github.com/yourusername/panda-radar/issues) with the following information:
- Bug description
- Steps to reproduce
- Expected behavior
- Screenshots (if relevant)
- Browser and operating system information

### 2. Feature Suggestions
For new feature proposals:
- Open an [issue](https://github.com/yourusername/panda-radar/issues)
- Describe the proposed feature
- Explain why it would be useful
- Optionally attach mockups or sketches

### 3. Direct Coding

#### Fork and Clone
```bash
# Fork the repository via GitHub UI
git clone https://github.com/yourusername/panda-radar.git
cd panda-radar
```

#### Create Branch
```bash
git checkout -b feature/new-feature
# or
git checkout -b bugfix/bug-fix
```

#### Development
1. Make changes
2. Test in different browsers
3. Ensure the application works offline

#### Commit and Push
```bash
git add .
git commit -m "feat: add new XYZ feature"
git push origin feature/new-feature
```

#### Pull Request
1. Open a Pull Request on GitHub
2. Describe the changes
3. Link relevant issues (#123)
4. Wait for review

## 📝 Coding Standards

### HTML
- Use semantic HTML5 elements
- Maintain accessibility (alt texts, ARIA labels)
- Use English descriptions for UI elements

### CSS
- Use CSS custom properties (variables)
- Maintain responsive design
- Prefer Flexbox/Grid over float
- Use BEM methodology for classes

### JavaScript
- Use modern ES6+ syntax
- No external dependencies except Leaflet.js
- Comment complex logic
- Use async/await instead of callback functions

## 🐼 Přidání nové zoo s pandami

Nejčastější typ příspěvku! Postup:

1. Otevřete `script.js`
2. Najděte pole `pandaZoos` v konstruktoru
3. Přidejte nový objekt:

```javascript
{
    name: "Název Zoo",
    location: "Město, Země", 
    lat: 12.3456,          // GPS latitude
    lng: 78.9012,          // GPS longitude  
    pandas: 2,             // Aktuální počet pand
    details: "Zajímavé info o pandách! 🐼"
}
```

### Ověření GPS souřadnic
- Použijte [Google Maps](https://maps.google.com) nebo [OpenStreetMap](https://openstreetmap.org)
- Klikněte pravým na zoo → "Co je zde?" → zkopírujte souřadnice
- Ověřte, že marker se zobrazí na správném místě

### Aktuální informace
- Ověřte počet pand na oficiálních stránkách zoo
- Přidejte zajímavé informace (jména pand, speciální programy)
- Používejte panda emoji v detailech! 🐼

## 🎨 Design Guidelines

### Barevná paleta
- Primární: `#ff6b6b` (coral)
- Sekundární: `#48cae4` (sky blue)
- Accent: `#feca57` (warm yellow)
- Text: `#2c3e50` (dark blue-gray)
- Muted: `#7f8c8d` (gray)

### Typography
- Hlavní font: Fredoka (Google Fonts)
- Fallback: cursive, sans-serif
- Používejte emoji konzistentně (🐼🐾🎋📍🌍)

### Animace
- Zachovávejte playful ale ne rušivé animace
- Používejte ease-in-out transitions
- Animace by měly trvat 0.3s nebo méně

## 🧪 Testování

### Před submitnutím PR:
- [ ] Aplikace funguje v Chrome/Safari/Firefox/Edge
- [ ] Responzivní design funguje na mobilu
- [ ] Geolokace funguje (testujte s povolenými/zakázanými právy)
- [ ] Všechny animace fungují hladce
- [ ] Žádné JavaScript chyby v console
- [ ] Nové zoo se zobrazují správně na mapě

### Testování na různých zařízeních:
- Desktop (1920x1080)
- Tablet (768x1024)  
- Mobil (375x667)

## 📋 Commit Message Format

Používejte [Conventional Commits](https://conventionalcommits.org/):

```
feat: přidání Zoo Berlin s 2 pandami
fix: oprava počítání vzdálenosti na mobilech  
docs: aktualizace README s novými zoo
style: zlepšení responzivního designu pro tablety
refactor: optimalizace kódu pro počítání statistik
```

## 🎯 Roadmapa

Nápady na budoucí funkce:
- [ ] Filtrování zoo podle země/kontinentu
- [ ] Tmavý režim
- [ ] Sharing na sociálních sítích
- [ ] Více jazyků (angličtina, němčina)
- [ ] PWA podpora (offline režim)
- [ ] Favoritní zoo
- [ ] Notifications o nových pandích mláďatech

## ❓ Potřebujete pomoct?

- Otevřete [Discussion](https://github.com/yourusername/panda-radar/discussions)
- Označte maintainera v issue
- Pošlete email (pokud je k dispozici)

## 🐾 Děkujeme!

Každý příspěvek pomáhá udělat svět pand lepším místem! 🐼💚
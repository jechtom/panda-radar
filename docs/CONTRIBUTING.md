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

## 🐼 Adding New Panda Zoos

The most common type of contribution! Steps:

1. Open `script.js`
2. Find the `pandaZoos` array in the constructor
3. Add a new object:

```javascript
{
    name: "Zoo Name",
    location: "City, Country", 
    lat: 12.3456,          // GPS latitude
    lng: 78.9012,          // GPS longitude  
    pandas: 2,             // Current panda count
    details: "Interesting panda info! 🐼"
}
```

### GPS Coordinates Verification
- Use [Google Maps](https://maps.google.com) or [OpenStreetMap](https://openstreetmap.org)
- Right-click on the zoo → "What's here?" → copy coordinates
- Verify that the marker appears in the correct location

### Current Information
- Verify panda count on official zoo websites
- Add interesting information (panda names, special programs)
- Use panda emoji in details! 🐼

## 🎨 Design Guidelines

### Color Palette
- Primary: `#ff6b6b` (coral)
- Secondary: `#48cae4` (sky blue)
- Accent: `#feca57` (warm yellow)
- Text: `#2c3e50` (dark blue-gray)
- Muted: `#7f8c8d` (gray)

### Typography
- Main font: Fredoka (Google Fonts)
- Fallback: cursive, sans-serif
- Use emoji consistently (🐼🐾🎋📍🌍)

### Animations
- Keep playful but not disruptive animations
- Use ease-in-out transitions
- Animations should last 0.3s or less

## 🧪 Testing

### Before submitting PR:
- [ ] Application works in Chrome/Safari/Firefox/Edge
- [ ] Responsive design works on mobile
- [ ] Geolocation works (test with allowed/denied permissions)
- [ ] All animations work smoothly
- [ ] No JavaScript errors in console
- [ ] New zoos display correctly on map

### Testing on different devices:
- Desktop (1920x1080)
- Tablet (768x1024)  
- Mobile (375x667)

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
# Přispívání k Panda Radar 🐼

Děkujeme za váš zájem přispět k Panda Radar! Každý příspěvek je vítán, ať už se jedná o hlášení chyb, návrhy na vylepšení nebo přímo kód.

## 🚀 Jak přispět

### 1. Nahlášení chyby
Pokud najdete chybu, vytvořte prosím [issue](https://github.com/yourusername/panda-radar/issues) s následujícími informacemi:
- Popis chyby
- Kroky k reprodukci
- Očekávané chování
- Screenshots (pokud je to relevantní)
- Informace o prohlížeči a operačním systému

### 2. Návrh na vylepšení
Pro návrhy nových funkcí:
- Otevřete [issue](https://github.com/yourusername/panda-radar/issues)
- Popište navrhovanou funkci
- Vysvětlete, proč by byla užitečná
- Případně přiložte mockupy nebo nákresy

### 3. Přímé kódování

#### Fork a Clone
```bash
# Fork repozitáře přes GitHub UI
git clone https://github.com/yourusername/panda-radar.git
cd panda-radar
```

#### Vytvoření branche
```bash
git checkout -b feature/nova-funkce
# nebo
git checkout -b bugfix/oprava-chyby
```

#### Vývoj
1. Proveďte změny
2. Testujte v různých prohlížečích
3. Ujistěte se, že aplikace funguje offline

#### Commit a Push
```bash
git add .
git commit -m "feat: přidání nové funkce XYZ"
git push origin feature/nova-funkce
```

#### Pull Request
1. Otevřete Pull Request na GitHubu
2. Popište změny
3. Připojte relevantní issues (#123)
4. Počkejte na review

## 📝 Coding Standards

### HTML
- Používejte sémantické HTML5 elementy
- Zachovávejte accessibility (alt texty, ARIA labels)
- Používejte české popisy pro UI elementy

### CSS
- Používejte CSS custom properties (proměnné)
- Zachovávejte responzivní design
- Preferujte Flexbox/Grid před float
- Používejte BEM metodologii pro třídy

### JavaScript
- Používejte moderní ES6+ syntax
- Žádné externí závislosti kromě Leaflet.js
- Komentujte složitější logiku
- Používejte async/await místo callback funkcí

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
# HuntAI Website

Een pixel-perfecte recreatie van de HuntAI Dutch cybersecurity platform website met dark theme en responsive design.

## Beschrijving
Dit is een exacte kopie van de originele HuntAI website, een Nederlands cybersecurity platform dat gespecialiseerd is in het opsporen van digitale kwetsbaarheden met behulp van AI. De website behoudt de donkere thema-esthetiek, responsieve ontwerp en interactieve elementen van het origineel.

## Technologieën
- React
- Vite
- TypeScript
- Tailwind CSS
- shadcn/ui
- wouter (voor routing)
- Framer Motion (voor animaties)

## Lokale ontwikkeling

### Vereisten
- Node.js 20 of hoger
- npm 9 of hoger

### Installatie
```bash
# Kloon de repository
git clone https://github.com/Arjan342/huntai-website.git
cd huntai-website

# Installeer dependencies
npm install
```

### Ontwikkeling
```bash
# Start de development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in je browser om de site te bekijken.

### Bouwen voor productie
```bash
# Bouw de applicatie voor productie
npm run build
```

## Deployment
De website is geconfigureerd voor automatische deployment met GitHub Pages.

1. Push wijzigingen naar de `main` branch
2. De GitHub Actions workflow zal automatisch de site bouwen en deployen
3. De site is beschikbaar op [https://arjan342.github.io/huntai-website/](https://arjan342.github.io/huntai-website/)

## Structuur
- `client/src/components` - UI componenten
  - `features` - Grotere pagina-secties (HeroSection, ServicesSection, etc.)
  - `layout` - Herbruikbare layout componenten (Header, Footer)
  - `ui` - Basis UI elementen (shadcn/ui componenten)
- `client/src/pages` - Alle pagina's van de website
- `shared` - Gedeelde code tussen server en client (schemas, typen)
- `server` - Backend code (API routes, storage)

## Licentie
Dit project is uitsluitend bedoeld voor educatieve doeleinden. Alle rechten op het originele ontwerp en content behoren toe aan HuntAI.
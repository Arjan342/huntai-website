Set up the frontend according to the following prompt:
  <frontend-prompt>
  Create detailed components with these requirements:
  1. Use 'use client' directive for client-side components
  2. Make sure to concatenate strings correctly using backslash
  3. Style with Tailwind CSS utility classes for responsive design
  4. Use Lucide React for icons (from lucide-react package). Do NOT use other UI libraries unless requested
  5. Use stock photos from picsum.photos where appropriate, only valid URLs you know exist
  6. Configure next.config.js image remotePatterns to enable stock photos from picsum.photos
  7. Create root layout.tsx page that wraps necessary navigation items to all pages
  8. MUST implement the navigation elements items in their rightful place i.e. Left sidebar, Top header
  9. Accurately implement necessary grid layouts
  10. Follow proper import practices:
     - Use @/ path aliases
     - Keep component imports organized
     - Update current src/app/page.tsx with new comprehensive code
     - Don't forget root route (page.tsx) handling
     - You MUST complete the entire prompt before stopping
  </frontend-prompt>

  <summary_title>
Dutch Cybersecurity AI Platform Landing Page
</summary_title>

<image_analysis>
1. Navigation Elements:
- Primary navigation: Home, Diensten, Nieuws, Use Cases, Over Ons, Onze Diensten, Kwetsbaarheidsanalyse, Automatische AI Pentesten
- Logo "HuntAI" positioned top-left, white text
- "NL" language selector and "Request demo" button in top-right
- Navigation height: 60px
- Fixed position header with dark background

2. Layout Components:
- Hero section: Full-width, centered content (~1200px max-width)
- Feature grid: 4-column layout with icon cards
- Services section: 2-column layout with service cards
- News section: 3-column grid for article cards
- Container padding: 24px horizontal, 48px vertical
- Responsive max-width: 1440px

3. Content Sections:
- Hero with headline and subtext
- "Waarom Kiezen voor HuntAI?" features section
- "Onze Diensten" services showcase
- "Laatste Nieuws" news grid
- CTA section at bottom
- Each section maintains consistent vertical spacing (64px)

4. Interactive Controls:
- Primary CTA buttons in purple (#6366F1)
- Secondary buttons with transparent background
- Card hover effects with subtle scaling
- "Lees meer" (Read more) links in articles
- Contact form triggers

5. Colors:
- Primary: #6366F1 (Purple)
- Secondary: #1E293B (Dark blue)
- Background: #0F172A (Deep blue)
- Text: #FFFFFF (White)
- Accent: #38BDF8 (Light blue)

6. Grid/Layout Structure:
- 12-column grid system
- Gutters: 24px
- Breakpoints: 
  - Mobile: 320px
  - Tablet: 768px
  - Desktop: 1024px
  - Wide: 1440px
</image_analysis>

<development_planning>
1. Project Structure:
```
src/
├── components/
│   ├── layout/
│   │   ├── Header
│   │   ├── Footer
│   │   └── Navigation
│   ├── features/
│   │   ├── HeroSection
│   │   ├── FeatureGrid
│   │   ├── ServicesSection
│   │   └── NewsGrid
│   └── shared/
│       ├── Button
│       ├── Card
│       └── Icons
├── assets/
├── styles/
├── hooks/
└── utils/
```

2. Key Features:
- Responsive navigation system
- Dynamic content loading for news articles
- Interactive service cards
- Contact form with validation
- Multilingual support (NL/EN)

3. State Management:
```typescript
interface AppState {
  navigation: {
    currentPath: string;
    language: 'nl' | 'en';
  };
  services: {
    items: Service[];
    loading: boolean;
  };
  news: {
    articles: Article[];
    currentPage: number;
  };
}
```

4. Component Architecture:
- Layout.tsx (Base layout wrapper)
- Navigation.tsx (Primary nav)
- FeatureCard.tsx (Reusable feature display)
- ServiceCard.tsx (Service information)
- NewsCard.tsx (Article preview)
- CTASection.tsx (Call-to-action)

5. Responsive Breakpoints:
```scss
$breakpoints: (
  'mobile': 320px,
  'tablet': 768px,
  'desktop': 1024px,
  'wide': 1440px
);
```
</development_planning>
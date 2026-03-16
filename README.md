# 🖤 DARK YOGA — Premium Yoga Studio Website

> A luxury, cinematic, ultra-modern web experience for Dark Yoga Vienna, Austria.

---

## 🚀 Quick Start

```bash
# 1. Enter the project directory
cd dark-yoga

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open **http://localhost:5173** in your browser.

---

## 📦 Build for Production

```bash
npm run build    # Outputs to /dist
npm run preview  # Preview production build locally
```

---

## 🗂 Project Structure

```
dark-yoga/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AmbientLight.jsx       # Floating purple glow blobs
│   │   │   ├── CustomCursor.jsx       # Luxury custom cursor
│   │   │   ├── Footer.jsx             # Elegant footer
│   │   │   ├── GrainOverlay.jsx       # Film grain effect
│   │   │   ├── Navigation.jsx         # Glassmorphism nav + mobile menu
│   │   │   └── PageTransition.jsx     # Framer Motion route transitions
│   │   ├── sections/
│   │   │   ├── Hero.jsx               # Cinematic hero with particles
│   │   │   ├── Philosophy.jsx         # Philosophy + stats section
│   │   │   ├── ClassesPreview.jsx     # 6-class animated grid
│   │   │   ├── FeaturedInstructor.jsx # Instructor spotlight
│   │   │   ├── Testimonials.jsx       # Auto-play testimonial carousel
│   │   │   └── CallToAction.jsx       # Full-screen CTA
│   │   └── three/
│   │       ├── ParticleField.jsx      # Three.js 1500-particle system
│   │       └── FloatingSphere.jsx     # Wireframe 3D sphere decoration
│   ├── hooks/
│   │   ├── useLenis.js                # Lenis smooth scroll + GSAP ticker
│   │   ├── useMagneticButton.js       # Magnetic cursor effect
│   │   └── useScrollReveal.js         # GSAP ScrollTrigger reveal
│   ├── pages/
│   │   ├── Home.jsx                   # Landing page (all sections)
│   │   ├── Classes.jsx                # Classes listing + filters
│   │   ├── About.jsx                  # Story, team, timeline
│   │   ├── Schedule.jsx               # Weekly schedule grid
│   │   └── Contact.jsx                # Contact form + FAQ
│   ├── utils/
│   │   ├── cn.js                      # Tailwind className utility
│   │   └── data.js                    # Classes, instructors, schedule data
│   └── styles/
│       └── globals.css                # Global styles + custom utilities
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## 🎨 Design System

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| Black | `#050505` | Background |
| Charcoal | `#111111` | Card backgrounds |
| Purple | `#7c3aed` | Primary accent |
| Purple Light | `#a855f7` | Hover states |
| Gold | `#c9a96e` | Logo, highlights |

### Typography
- **Display / Headings** — Cormorant Garamond (Google Fonts)
- **Body / UI** — Inter (Google Fonts)
- **Code / Mono** — JetBrains Mono

### Key CSS Utilities
- `.glass-card` — Glassmorphism card
- `.btn-glow` — Glowing purple border button
- `.text-gradient` — White → Gold → Purple gradient text
- `.grain-overlay` — Film grain noise overlay
- `.nav-link` — Animated underline nav link
- `.ambient-glow` — Floating light blob

---

## ⚡ Tech Stack

| Tech | Purpose |
|------|---------|
| **Vite 5** | Build tool |
| **React 18** | UI framework |
| **Tailwind CSS 3** | Styling |
| **Framer Motion 11** | UI animations & page transitions |
| **GSAP 3 + ScrollTrigger** | Advanced scroll animations |
| **Lenis** | Buttery-smooth scrolling |
| **Three.js + R3F** | 3D particle field & sphere |
| **React Router 6** | Client-side routing |
| **Lucide React** | Icons |

---

## 📍 Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Cinematic hero + all brand sections |
| `/classes` | Classes | Filterable yoga class grid |
| `/about` | About | Story, philosophy, team, timeline |
| `/schedule` | Schedule | Weekly animated schedule |
| `/contact` | Contact | Form + map + FAQ |

---

## 🎬 Animation Features

- **Hero** — Staggered letter reveal, floating particles, radial glow
- **Scroll** — GSAP ScrollTrigger reveals, parallax images, count-up stats
- **Hover** — Magnetic buttons, card glow, cursor expansion
- **Pages** — Framer Motion fade/slide transitions
- **3D** — Three.js rotating particle field (1500 particles)
- **Ambient** — Framer Motion floating light blobs, film grain overlay

---

## 🔧 Customization

### Update Studio Info
Edit `/src/utils/data.js` — change instructors, classes, schedule, testimonials.

### Update Brand Colors
Edit `tailwind.config.js` → `theme.extend.colors` + `/src/styles/globals.css` CSS variables.

### Add Real Images
Replace placeholder divs in instructor/hero sections with `<img>` tags pointing to `/public/images/`.

### Google Maps
In `Contact.jsx`, replace the iframe `src` with your Google Maps embed URL from:
https://maps.google.com/maps → Share → Embed a map

---

## 📬 Studio Info (Dark Yoga Vienna)

- **Address:** Mariahilfer Str. 100, 1060 Wien, Austria
- **Email:** studio@darkyoga.at
- **Phone:** +43 1 234 5678
- **Web:** [darkyoga.at](https://www.darkyoga.at)

---

## 📄 License

Built for Dark Yoga Vienna. All rights reserved.

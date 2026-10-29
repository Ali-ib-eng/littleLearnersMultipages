# Little Learners Academy

### A pixel-faithful, fully responsive kindergarten landing page, built from a Figma design with **React + TypeScript**.

## About

This project turns a multi-breakpoint Figma file (desktop, laptop and mobile) into a clean, production-style React application.

The goal wasn't just to *match the design*. It was to build it the way a real team would: small reusable components, typed data, no hard-coded content in the JSX, and styles that don't fight each other when the screen size changes.

## Highlights

- **Truly responsive**: desktop, laptop and mobile layouts that follow the Figma design, using mobile-aware breakpoints and fluid sizing with `clamp()` instead of dozens of media queries.
- **Sticky header + smooth-scroll navigation**: the top banner and navbar stay in place while scrolling, with a mobile dropdown menu controlled by a single `useState`.
- **Testimonials slider built from scratch**: no slider library. It's dynamic, so it works with **any number of testimonials** (3 cards on desktop, 1 on mobile, circular navigation).
- **FAQ accordion**: one question open at a time, with a smooth open/close animation done in pure CSS (no JS measuring).
- **Content separated from UI**: every section is driven by a typed data file (`*Data.ts`), so changing text never means touching JSX.
- **Strict TypeScript**: typed props, typed data and shared interfaces. Even icons are typed (`IconType`).
- **Reusable building blocks**: one shared `Section` wrapper and `SectionHeader` keep every section's spacing and heading identical.

## Tech Stack

| Area | Choice |
|---|---|
| Framework | React |
| Language | TypeScript |
| Build tool | Vite |
| Styling | CSS Modules (+ CSS variables) |
| Icons | react-icons |
| Font | Outfit |

## Page Sections

1. **Header**: top banner + navbar (with mobile menu)
2. **Hero**: headline, image and stats card
3. **Our Benefits**: six benefit cards with icons
4. **Navigate through our Pages**: four page cards
5. **Our Testimonials**: custom slider
6. **FAQ**: accordion
7. **Footer**: links, contact info, socials

## Architecture Decisions

**One component, one responsibility.** Each section has its own folder with a component, a CSS Module and a data file.

**Data-driven sections.** Components receive typed props and render them. For example:

```tsx
<BenefitsSection {...BENEFITS_DATA} />
```

**Design tokens as CSS variables.** Page background and horizontal spacing are defined once in `:root`, so every section lines up with the hero exactly as in the design.

**Fluid, not fragile.** Instead of hard-coding pixel values for every screen, spacing and font sizes scale with `clamp()`, and layouts switch at a small number of meaningful breakpoints.

## Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/Ali-ib-eng/littleLearners.git

# 2. Move into the project
cd YOUR-REPO

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## What I Practiced

- Translating a Figma design (including spacing, borders and shadows) into pixel-accurate CSS
- Designing a reusable component architecture in React
- Modeling UI data with TypeScript interfaces and generics-friendly props
- Building interactive UI (menu, slider, accordion) with only `useState` / `useEffect`
- Responsive design with CSS Grid, Flexbox and `clamp()`

## Author

**Ali Sliman Ibraheem**

Final-year Informatics Engineering student (Software Engineering & Information Systems), University of Latakia, looking for a **Junior Software Engineer / Front-End (React.js)** role.

[LinkedIn](https://www.linkedin.com/in/ali-ibraheem-86253b440) · [GitHub](https://github.com/Ali-ib-eng) · [Email](mailto:ali.sliman.ibraheem@gmail.com)

⭐ If you like this project, feel free to give it a star!
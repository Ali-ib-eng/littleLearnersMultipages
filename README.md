# 🎓 Little Learners Academy

**A pixel-faithful, fully responsive 6-page kindergarten website, built from a Figma design with React + TypeScript.**

[**Live Demo**](https://ali-ib-eng.github.io/YOUR-REPO/) · [**Figma Design**](#) · [**Author**](#-author)

<!-->

---

## ✨ Highlights

- **6 pages, one codebase:** Home, About, Academics, Admissions, Student Life and Contact, routed with React Router.
- **Pixel-faithful and responsive:** matched to Figma at desktop, laptop and mobile, with breakpoints at 992 / 768 / 576px.
- **Built from scratch, no UI libraries:**
  - a reusable **slider** (testimonials, awards, room gallery) with smooth sliding and swipe-free circular navigation
  - a **filterable gallery** (All / Classrooms / Library / ...) driven by a single `useState`
  - a **FAQ accordion** animated in pure CSS
  - a **vertical timeline**, a **swipeable fee table** on mobile and a **controlled contact form**
- **Data-driven UI:** every section renders typed data (`*Data.ts`), so changing content never means touching JSX.
- **Strict TypeScript:** typed props, typed form fields and typed icons (`IconType`).
- **Reusable components:** one `SectionHeader`, `Badge`, `Slider` and `BenefitsSection` power many pages with different data.

## 🛠️ Tech Stack

| | |
|---|---|
| **Framework** | React 19 |
| **Language** | TypeScript |
| **Build tool** | Vite |
| **Routing** | React Router |
| **Styling** | CSS Modules + CSS variables |
| **Icons** | react-icons |
| **Deploy** | GitHub Pages |

## 🧠 Architecture

```
src/
├── assets/
│   ├── Components/      # one folder per section: component + CSS Module + data
│   ├── pages/           # Home, About, Academics, Admissions, StudentLife, Contact
│   └── interfaces/      # shared TypeScript types
├── App.tsx              # routes
└── main.tsx
```

- **One component, one responsibility.** Each section owns its component, styles and data file.
- **Props over duplication.** The same component renders different content, e.g. `<BenefitsSection {...EXTRACURRICULAR_DATA} />`.
- **Design tokens as CSS variables.** Page gutter, content width and background are defined once in `:root`.

## 🚀 Getting Started

```bash
git clone https://github.com/Ali-ib-eng/littleLearnersMultipages.git
cd littleLearnersMultipages
npm install
npm run dev
```

```bash
npm run build     # production build
npm run deploy    # publish to GitHub Pages
```

## 📚 What I Practiced

- Translating Figma specs (spacing, borders, hard shadows) into precise CSS
- Designing a reusable, typed component architecture
- Building interactive UI with only `useState`, `useRef` and `useEffect`
- Responsive layouts with CSS Grid, Flexbox and media queries
- Client-side routing and deploying a SPA to GitHub Pages

## 👤 Author

**Ali Sliman Ibraheem**  
Final-year Informatics Engineering student (Software Engineering & Information Systems), University of Latakia, looking for a **Junior Software Engineer / Front-End (React.js)** role.

[LinkedIn](https://www.linkedin.com/in/ali-ibraheem-86253b440) · [GitHub](https://github.com/Ali-ib-eng) · [Email](mailto:ali.sliman.ibraheem@gmail.com)

⭐ If you like this project, give it a star!
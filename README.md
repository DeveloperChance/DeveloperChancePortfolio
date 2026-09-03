# Developer Portfolio - Chance Byers

A modern and responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases my development projects, technical skills, and professional experience.

## Tech Stack

- **React 19.2.8** - Modern React
- **TypeScript 6.0.2** - Type-safe Development
- **Vite 8.2.2** - Build Tool / Dev Server
- **React Router 8.3.1** - Client-Side Routing
- **Tailwind CSS 4.3.3** - CSS Framework
- **Fontsource** - Web Fonts (Inter, JetBrains Mono)
- **OXLint 1.79** - Code Quality / Consistency

## Project Structure

```text
DeveloperChancePortfolio/
├── public/
│   ├── _redirects              # Redirect Rules
│   ├── favicon.ico             # Favicon
│   ├── robots.txt              # Robots / Crawlers Rules
│   └── sitemap.xml             # Sitemap for Crawlers
├── src/
│   ├── assets/
│   │   └── icons/
│   │       ├── react.svg       # React SVG
│   │       └── vite.svg        # Vite SVG
│   ├── components/
│   │   ├── background.tsx      # Animated Background (Grid, Shapes, Paths)
│   │   ├── header.tsx          # Site Header / Nav
│   │   ├── footer.tsx          # Site Footer
│   │   └── layout.tsx          # Shared Page Layout
│   ├── data/
│   │   ├── projects.ts         # Project Entries (Project[])
│   │   └── technologies.ts     # Shared Technology Registry
│   ├── pages/
│   │   ├── index.tsx           # Home Page
│   │   ├── about.tsx           # About Page
│   │   ├── projects.tsx        # Projects Page
│   │   ├── contact.tsx         # Contact Page
│   │   └── notfound.tsx        # 404 Page
│   ├── services/
│   │   └── background.ts       # Background Generation / Helper Logic
│   ├── types/
│   │   ├── background.ts       # Background Shape / Path Types
│   │   ├── project.ts          # Project Interface
│   │   └── tech.ts             # Technology Interface
│   ├── App.tsx                 # Main App / Routing Config
│   ├── main.tsx                # App Entry Point
│   └── index.css               # Global Styles
├── .gitignore                  # Git Ignore
├── .oxlintrc.json              # OXLint Config
├── index.html                  # HTML template
├── LICENSE                     # Project License
├── package-lock.json           # Locked Dependency Versions
├── package.json                # Dependencies / scripts
├── README.md                   # Project Read Me
├── tsconfig.app.json           # TypeScript App Config
├── tsconfig.json               # TypeScript Config
├── tsconfig.node.json          # TypeScript Node Config
└── vite.config.ts              # Vite Config
```

## Getting Started

### Prerequisites

- Node.js (v22.22 or higher)
- npm or yarn
- Modern browser (Safari 16.4+, Chrome 111+, Firefox 128+)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production application
- `npm run lint` - Run OXLint to check code quality
- `npm run preview` - Preview production application build locally

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Chance Byers**

- GitHub: [@DeveloperChance](https://github.com/DeveloperChance)
- Portfolio: [Portfolio Site](https://developerchance.com)

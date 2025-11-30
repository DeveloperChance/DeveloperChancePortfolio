# Developer Portfolio - Chance Byers

A modern, fully responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases my development projects, technical skills, and professional experience with a focus on clean design and mobile-first responsiveness.

## ✨ Features

- **Responsive Design** - Mobile-first approach with hamburger menu navigation
- **Project Showcase** - 11+ projects organized by category (Web Development, Desktop Applications, CLI Tools)
- **Dynamic Routing** - Client-side routing with React Router including custom 404 page
- **Modern UI** - Clean, professional design with gradient accents and smooth transitions
- **Type Safety** - Full TypeScript implementation for better code quality
- **Social Integration** - Direct links to GitHub, LinkedIn, and X (Twitter)

## 🚀 Tech Stack

- **React 18.3** - Modern React with hooks (useState for interactive components)
- **TypeScript 5.3** - Type-safe development with strict mode enabled
- **Vite 7.2** - Lightning-fast build tool and dev server
- **React Router 6.21** - Client-side routing with nested routes
- **Tailwind CSS 3.4** - Utility-first CSS framework with responsive breakpoints
- **ESLint** - Code quality and consistency enforcement

## 📦 Project Structure

```
DeveloperChancePortfolio/
├── src/
│   ├── components/
│   │   ├── Layout.tsx          # Main layout with mobile navigation
│   │   └── ProjectCard.tsx     # Reusable project display component
│   ├── pages/
│   │   ├── Home.tsx            # Landing page with hero and featured project
│   │   ├── About.tsx           # Professional bio and technical skills
│   │   ├── Projects.tsx        # Complete project portfolio by category
│   │   ├── Contact.tsx         # Contact form and social links
│   │   └── NotFound.tsx        # Custom 404 error page
│   ├── data/
│   │   └── projects.ts         # Centralized project data (11 projects)
│   ├── types/
│   │   └── project.ts          # TypeScript interfaces for type safety
│   ├── App.tsx                 # Main app with routing configuration
│   ├── main.tsx                # Application entry point
│   ├── index.css               # Global styles with Tailwind directives
│   └── vite-env.d.ts           # Vite type declarations
├── public/
│   └── vite.svg                # Favicon
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
└── .eslintrc.cjs               # ESLint configuration
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## 📜 Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build production-ready application
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Chance Byers**

- GitHub: [@DeveloperChance](https://github.com/DeveloperChance)
- Portfolio: [Portfolio Site](https://developerchance.com)
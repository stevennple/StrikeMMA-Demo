# StrikeMMA Demo

A modern, interactive web application showcasing MMA (Mixed Martial Arts) content with dynamic features and responsive design. Built with Next.js, TypeScript, and TailwindCSS.

## Features
- **Interactive UI:** Smooth animations and transitions powered by Framer Motion
- **Dynamic Content:** Real-time content updates and interactive elements
- **Responsive Design:** Fully responsive layout that works on all devices
- **Type Safety:** Built with TypeScript for enhanced reliability
- **Modern Stack:** Utilizing Next.js 14 and React 18
- **AI Integration:** Features Google's Generative AI capabilities
- **Social Media Integration:** Twitter/X embedding support
- **Dynamic Typography:** Engaging typewriter effects

## Getting Started
### Prerequisites
- Node.js (16.x or later)
- npm or yarn package manager
- Git

### Installation
1. Clone the repository:
```bash
git clone https://github.com/stevennple/StrikeMMA-Demo.git
cd StrikeMMA-Demo
```
2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4 Open http://localhost:3000 in your browser

## Tech Stack
### Frontend
- **Framework:** Next.js 14
- **Language:** TypeScript & JavaScript
- **UI Library:** React 18
- **Styling:** TailwindCSS, CSS Modules
- **Animations:** Framer Motion
- **Components:** Radix UI

### Development Tools
- ESLint
- TypeScript
- PostCSS
- Autoprefixer

## Key Dependencies
```JSON
{
  "dependencies": {
    "next": "^14.2.7",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "typescript": "^5.5.4",
    "tailwindcss": "3.3.3",
    "framer-motion": "^11.0.25",
    "@google/generative-ai": "^0.17.1",
    "react-simple-typewriter": "^5.0.1",
    "react-responsive-carousel": "^3.2.23"
  }
}
```

## Available Scripts
- npm run dev - Start development server
- npm run build - Build production bundle
- npm run export - Export static site
- npm run start - Start production server
- npm run lint - Run ESLint

## Configuration
The project uses several configuration files:

- next.config.js - Next.js configuration
- tailwind.config.js - TailwindCSS configuration
- tsconfig.json - TypeScript configuration
- postcss.config.js - PostCSS configuration

## Features in Detail
1. Responsive Design
    * Mobile-first approach
    * Breakpoint-specific layouts
    * Fluid typography
    * Interactive Elements

2. Smooth animations
    * Type-writer effects
    * Accordion components
    * Carousels
    * Performance

3. Optimized images
    * Code Splitting
    * Server-side rendering
    * Static site generation capabilities

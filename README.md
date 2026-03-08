# AI Test Automation Engineer Portfolio

A modern, responsive, single-page professional portfolio application built for an AI Test Automation Engineer. The application showcases a dynamic hero section with interactive particle graphics, detailed experience timelines, structured skills matrices, and project certifications, wrapping 9+ years of professional quality assurance expertise in a sleek "Glassmorphism" UI design.

> **Live Demo:** [https://myProwess.github.io/ai-engineer-portfolio](https://myProwess.github.io/ai-engineer-portfolio)

## 🏗️ Architecture Overview

The system is designed as a strict static Single Page Application (SPA), ensuring high performance, immediate load times, and low-cost static hosting compatibility. 

**Key Technologies:**
- **Framework:** React 18
- **Build Tool:** Vite 7 (configured for relative-path static asset generation)
- **Styling:** Modular Vanilla CSS with CSS Variables for consistent theming and dark/light contrast balancing.
- **Animations:** HTML5 `<canvas>` (Custom Particle Engine) & Native CSS Transitions.
- **Scroll Monitoring:** Custom `useScrollReveal` React Hook leveraging the `Intersection Observer API` for performant, staggered entrance animations.
- **Data Management:** Centralized JSON-like JavaScript data structure (`src/data/resumeData.js`) separating content from presentation logic.

## 📸 Visuals

| Hero Section (Interactive Particles) | Experience Timeline |
| :---: | :---: |
| ![Hero Placeholder](https://via.placeholder.com/600x400/0a192f/9caed6?text=Hero+Splash+Section) | ![Experience Placeholder](https://via.placeholder.com/600x400/0a192f/9caed6?text=Vertical+Experience+Timeline) |

| Skills Matrix (Hover Physics) | About & Stats |
| :---: | :---: |
| ![Skills Placeholder](https://via.placeholder.com/600x400/e6e6fa/333333?text=Categorized+Skills+Grid) | ![About Placeholder](https://via.placeholder.com/600x400/e6e6fa/333333?text=Glassmorphism+Stats+Row) |

*(Note: Replace placeholder image links with actual screenshots or GIFs hosted in a `.github/` folder once captured).*

## 🚀 Installation & Setup

This project uses `npm` and Vite. It is supported across Windows, macOS, and Linux.

**Prerequisites:**
- Node.js (v18.0.0 or higher recommended)
- Git

### Local Development Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/myProwess/ai-engineer-portfolio.git
   cd ai-engineer-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   *(Note: This project does not require any specific `.env` environment variables out of the box).*

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will become available at `http://localhost:5173/`.

### Deployment Build

To generate a production-ready static bundle compatible with GitHub Pages:
```bash
npm run build
```
This generates an optimized output in the `dist/` directory.

## ⚙️ Usage Examples

### Updating Resume Content
The entire site content is driven by a single data file. You do not need to edit JSX to update your work history or skills.

Open `src/data/resumeData.js` and modify the objects. For example, to add a new skill:
```javascript
skills: {
    languages: ["Core Java", "Typescript", "SQL", "HTML", "CSS", "Python"], // Added Python
    // ...
}
```

The `Skills.jsx` component dynamically maps string names to emojis. To map your new skill's icon, update the dictionary in `src/components/Skills.jsx`:
```javascript
const skillIcons = {
    // ... existing mappings
    'Python': '🐍',
};
```

## 📂 Directory Structure

```text
ai-engineer-portfolio/
├── public/                 # Static assets copied directly to build root
├── src/                    # Source code
│   ├── assets/             # Images and component-specific SVGs
│   ├── components/         # React functional components (.jsx) & modular styles (.css)
│   │   ├── About.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   └── Skills.jsx
│   ├── data/               # Content definitions
│   │   └── resumeData.js   # Main configuration payload
│   ├── hooks/              # Custom React Hooks
│   │   └── useScrollReveal.js # Intersection Observer logic
│   ├── App.jsx             # Main routing/section orchestrator
│   ├── index.css           # Global design system & CSS custom properties
│   └── main.jsx            # Application entry point
├── package.json            # Dependencies & npm scripts
├── vite.config.js          # Build configuration (configured with base: './')
└── README.md               # Project documentation
```

## 🤝 Contribution & License

### Contributing
Given this is a personal portfolio, direct feature contributions to the main repository are typically not accepted. However, if you would like to use this architecture as a template:
1. Fork the project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request for discussion if you believe the underlying architecture could benefit others.

### License
This project is licensed under the **MIT License**. You are free to fork entirely, replace the data in `resumeData.js` with your own, and host it as your personal portfolio. See the `LICENSE` file for full details.

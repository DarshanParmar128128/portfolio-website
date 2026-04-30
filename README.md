# Darshan Parmar — Personal Portfolio

A modern, responsive personal portfolio built with **React** and plain **CSS**.

## Tech Stack
- React 18 (functional components + hooks)
- Plain CSS (no Tailwind, no CSS-in-JS)
- Google Fonts — DM Serif Display + DM Sans

---

## Folder Structure

```
portfolio/
├── public/
│   └── index.html
└── src/
    ├── components/
    │   ├── Navbar.jsx   + Navbar.css
    │   ├── Hero.jsx     + Hero.css
    │   ├── About.jsx    + About.css
    │   ├── Skills.jsx   + Skills.css
    │   ├── Projects.jsx + Projects.css
    │   ├── Contact.jsx  + Contact.css
    │   └── Footer.jsx   + Footer.css
    ├── App.jsx
    ├── index.js
    └── index.css
```

---

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm start
```
Opens at **http://localhost:3000**

### 3. Build for production
```bash
npm run build
```
Output goes to the `build/` folder — ready to deploy on Vercel, Netlify, or GitHub Pages.

---

## Customisation Checklist

| What to change | Where |
|---|---|
| Your name / title / bio | `Hero.jsx`, `About.jsx` |
| Skills & proficiency % | `Skills.jsx` → `SKILLS` array |
| Projects & GitHub links | `Projects.jsx` → `PROJECTS` array |
| Email address | `Contact.jsx` |
| Social profile URLs | `Hero.jsx`, `Footer.jsx` |
| Resume PDF | Replace `href="#"` in `Hero.jsx` with your file path |
| Color palette | `index.css` → `:root` CSS variables |

---

## Deploying to GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Then:
```bash
npm run deploy
```

---

## License
MIT — feel free to use and customise.

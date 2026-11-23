# Premium Portfolio – Ajith Anugrah

A modern, agency‑level personal portfolio built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Lucide‑React**.

## ✨ Features
- Full‑screen hero with animated text, portrait, CTA buttons, and availability badge.
- Responsive navigation bar with theme toggle, resume download, and mobile hamburger menu.
- "Beyond the Code" about section with editorial copy and larger portrait.
- Interactive skill constellation grid.
- Project showcase cards with hover effects, tech badges, live demo & GitHub links.
- Experience timeline (SkillOrbit internship).
- Services section targeting freelance clients.
- Contact form with validation, loading state, success/error feedback, and WhatsApp link.
- Minimal footer with social links and back‑to‑top button.
- Light/dark theme persisted via `localStorage`.
- Accessible animation handling (reduced‑motion support).
- SEO meta tags, Open Graph support, and custom favicon placeholder.

## 📂 Project Structure
```
PROTFOLIO/
├─ public/                # index.html, favicon, resume PDF
├─ src/
│  ├─ assets/            # portrait.png
│  ├─ components/        # Navbar, Hero, About, Skills, Projects, Experience, Services, Contact, Footer
│  ├─ data/              # skills.ts, projects.ts, experience.ts
│  ├─ App.tsx
│  ├─ main.tsx
│  └─ index.css
├─ tailwind.config.cjs
├─ vite.config.ts
├─ tsconfig.json
├─ package.json
└─ README.md               # this file
```

## 🚀 Getting Started (on your machine)
1. **Clone / open the folder**
   ```bash
   cd C:\Users\Anugrah\Desktop\FREELANCING\PROTFOLIO
   ```
2. **Install dependencies** (requires internet)
   ```bash
   npm install
   ```
3. **Run the development server**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser – you’ll see the full portfolio.
4. **Build for production** (when ready to deploy)
   ```bash
   npm run build
   ```
   The static files are output to the `dist/` folder.
5. **Deploy** – push the repo to GitHub and connect it to Vercel, Netlify, Cloudflare Pages, etc. The default build command (`npm run build`) and output directory (`dist`) are already configured.

## 📧 Contact Form Configuration (optional)
The contact form posts to an endpoint defined by the environment variable `VITE_CONTACT_ENDPOINT`. For a quick setup you can use **Formspree**:
1. Create a Formspree form → copy the endpoint URL.
2. Create a `.env` file at the project root:
   ```dotenv
   VITE_CONTACT_ENDPOINT=https://formspree.io/f/your_form_id
   ```
3. Restart the dev server.

If you don’t set the variable, the form will simulate a successful submission after a short delay.

## 🎨 Design Tokens (Tailwind)
```js
// tailwind.config.cjs
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#111111',   // deep charcoal / near‑black
        text: '#f5f5f5',       // warm white
        accent: '#00ff00',    // electric lime
        secondary: '#8a2be2', // muted violet/blue
      },
    },
  },
  // …
};
```
The UI respects these colors throughout.

## 🛠️ Next‑Step Tweaks (if you wish)
- Replace `public/favicon.ico` with a custom **AA** icon.
- Add real screenshots for each project (place them in `src/assets/` and reference via the `thumbnail` field in `src/data/projects.ts`).
- Customize copy or add additional sections.
- Enable a custom 404 page (`src/pages/NotFound.tsx`).
- Add a theme‑persisted toggle animation or a subtle cursor‑following lighting effect in the hero (can be done with a tiny custom hook).

---
**All source files are located in**:
- **Portfolio root**: [PROTFOLIO folder](file:///C:/Users/Anugrah/Desktop/FREELANCING/PROTFOLIO)
- **Portrait image**: [portrait.png](file:///C:/Users/Anugrah/Desktop/FREELANCING/PROTFOLIO/src/assets/portrait.png)
- **Resume PDF**: [ANUGRAH_AJITH_Resume.pdf](file:///C:/Users/Anugrah/Desktop/FREELANCING/PROTFOLIO/public/ANUGRAH_AJITH_Resume.pdf)

You can now run the site locally, fine‑tune any copy, and deploy when you’re ready. If you need any further adjustments, just let me know – I’m happy to help!
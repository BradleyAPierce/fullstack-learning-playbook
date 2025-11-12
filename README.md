# 🧠 Full-Stack Learning Playbook

A modular, visually immersive roadmap guiding learners from front-end foundations to full-stack deployment, workflow automation, and portfolio launch.  
Created by **Bradley Pierce** as a live learning project and instructional framework for professional growth at Konica Minolta and beyond.

---

## 🚀 Overview

The **Full-Stack Learning Playbook** converts a static curriculum into an interactive, animated web experience built with **HTML**, **CSS**, **JavaScript**, and **Bootstrap 5**.  
It documents each phase of a developer’s growth — from setup to CI/CD automation — while showcasing modern UI design (glassmorphism, accent glow, and smooth animations).

---

## 🧩 Features

- **Six-Phase Learning Roadmap**
  - Phase 0 – Foundation Setup
  - Phase 1 – Front-End Architecture
  - Phase 2 – Back-End & Data Layer
  - Phase 3 – Full-Stack Integration & Deployment
  - Phase 4 – Professional Workflow & Automation
  - Phase 5 – Portfolio Launch & Continuous Growth
- **Reusable Components** – `navbar.html`, future `footer.html` injected via `include.js`
- **Smart Link Handling** – auto-fixes relative paths between index and phase pages
- **Active Nav Highlighting** – detects current page and applies accent glow
- **Animated Timeline & Cards** – fade/slide on scroll via Intersection Observer
- **Glassmorphic UI + Accent Glow**
- **Breadcrumb Navigation** – custom white chevrons › with hover glow
- **Smooth Scroll UX** – native CSS + optional JS easing
- **Deployment Ready** – ideal for Vercel or GitHub Pages

---

## 🧠 Tech Stack

| Layer               | Tools                                          |
| :------------------ | :--------------------------------------------- |
| **Front-End**       | HTML5 · CSS3 · JavaScript (ES6+) · Bootstrap 5 |
| **UI/UX**           | Glassmorphism · Neon Glow · Responsive Grid    |
| **Animation**       | CSS Keyframes · Intersection Observer API      |
| **Version Control** | Git · GitHub (SSH)                             |
| **Deployment**      | Vercel (static hosting)                        |
| **Learning Source** | LinkedIn Learning Full-Stack Developer Pathway |

---

## 📂 File Structure

```
fullstack-learning-playbook/
├── index.html
├── README.md
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── include.js
├── components/
│   ├── navbar.html
│   └── footer.html        (planned)
└── phases/
    ├── phase0.html
    ├── phase1.html
    ├── phase2.html
    ├── phase3.html
    ├── phase4.html
    └── phase5.html
```

---

## ⚙️ Setup & Local Preview

1. **Clone the Repo**

   ```bash
   git clone git@github.com:BradleyAPierce/fullstack-learning-playbook.git
   cd fullstack-learning-playbook
   ```

2. **Open in VS Code**

   - Right-click `index.html` → _Open with Live Server_  
     _(or use VS Code Insiders Live Preview)_

3. **Verify Dynamic Components**

   - Navbar loads automatically via `include.js`
   - Scroll animations trigger on visible cards

---

## 🌐 Deployment to Vercel

1. Install Vercel CLI (optional)

   ```bash
   npm install -g vercel
   ```

2. Run `vercel` from the project root.
3. Confirm asset paths load correctly.
4. Each push to `main` auto-deploys.

> 💡 Tip: Add a `vercel.json` with `"cleanUrls": true` for prettier URLs.

---

## 🔄 Next Iterations

| Category       | Planned Enhancement                       |
| :------------- | :---------------------------------------- |
| 🧭 Navigation  | Add `footer.html` with social links       |
| 💬 Interaction | “Back to Top” button + progress indicator |
| 📊 Analytics   | Google Analytics 4 event tracking         |
| 🧠 Data        | Pull course data from JSON/CSV            |
| 🎨 Visual FX   | GSAP or Framer Motion transitions         |
| 🧱 Refactor    | Rebuild in React or Next.js               |
| 🧾 Docs        | Generate PDF/Markdown phase reports       |

---

## 🧑‍💻 Author

**Bradley Pierce**  
Senior Instructional Designer & Full-Stack Developer-in-training  
Konica Minolta Business Solutions U.S.A.

🔗 bradleypierce.ai | GitHub: @BradleyAPierce

---

## 🧩 License

This project is provided for educational and professional demonstration purposes.  
© 2025 Bradley Pierce. All rights reserved.

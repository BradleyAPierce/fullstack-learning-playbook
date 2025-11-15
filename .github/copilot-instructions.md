# Copilot Instructions for AI Coding Agents

## Project Overview

- Modular, animated web curriculum for full-stack learning, built with HTML, CSS, JavaScript (ES6+), and Bootstrap 5.
- Six learning phases, each as a separate HTML file in `/phases/`.
- Reusable UI components in `/components/` (e.g., `navbar.html`, `footer.html`) injected via `assets/js/include.js`.
- Course data is stored in JSON (`assets/json/linkedincoursedescriptions.json`) and dynamically loaded into phase pages.

## Key Patterns & Workflows

- **Component Injection:** Use `include.js` to load shared HTML fragments (navbar, footer) into pages. Example: `<div data-include="/components/navbar.html"></div>`.
- **Dynamic Content:** Course descriptions are injected into accordions using JS that fetches and parses the JSON file. See phase page scripts for mapping logic.
- **Navigation Highlighting:** Active nav item is detected and styled via JS in `include.js`.
- **Animations:** Timeline and card animations use Intersection Observer API for fade/slide effects.
- **Glassmorphism & Glow:** UI styling is managed in `assets/css/style.css`.
- **Smart Link Handling:** JS auto-fixes relative links between index and phase pages.

## Developer Conventions

- **Directory Structure:**
  - `/assets/css/style.css` — global styles
  - `/assets/js/include.js` — component loader & nav logic
  - `/components/` — HTML fragments for UI reuse
  - `/phases/` — main curriculum pages
  - `/assets/json/linkedincoursedescriptions.json` — course data
- **No build step required:** Static HTML/JS/CSS; preview with Live Server or deploy to Vercel/GitHub Pages.
- **Add new courses:** Update the JSON file and ensure the mapping in phase page scripts matches accordion IDs.
- **Custom UI:** Glassmorphic cards, accent glow, breadcrumb chevrons, and smooth scroll are implemented in CSS and JS.

## External Integrations

- **LinkedIn Learning:** Course data sourced from LinkedIn Learning, referenced in JSON and injected into UI.
- **Vercel:** For deployment, use `vercel` CLI. Add `vercel.json` for clean URLs if desired.

## Example: Injecting Course Data

```js
fetch("/assets/json/linkedincoursedescriptions.json")
  .then((r) => r.json())
  .then((courses) => {
    // Map course to accordion
    // ...see phase page scripts
  });
```

## Troubleshooting

- If a component or course does not appear, check the mapping between JSON `courseName` and accordion IDs in the JS.
- For nav highlighting or link issues, review logic in `include.js`.

---

_Review and update this file as new patterns or workflows emerge._

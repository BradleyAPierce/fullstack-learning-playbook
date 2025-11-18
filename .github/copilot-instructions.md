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
- **Neutral Color Theme:** All UI uses a professional, readable palette (white, tan, silver, navy, maroon). Neon/glow and dark mode are deprecated.
- **Design Tokens:** Use CSS custom properties for all colors and typography. See below for required tokens.
- **Smart Link Handling:** JS auto-fixes relative links between index and phase pages.

## Developer Conventions

- **Directory Structure:**
  - `/assets/css/style.css` — global styles (uses new neutral palette)
  - `/assets/js/include.js` — component loader & nav logic
  - `/components/` — HTML fragments for UI reuse
  - `/phases/` — main curriculum pages
  - `/assets/json/linkedincoursedescriptions.json` — course data
- **No build step required:** Static HTML/JS/CSS; preview with Live Server or deploy to Vercel/GitHub Pages.
- **Add new courses:** Update the JSON file and ensure the mapping in phase page scripts matches accordion IDs.
- **Custom UI:** Glassmorphic cards, neutral accent, breadcrumb chevrons, and smooth scroll are implemented in CSS and JS.

## External Integrations

- **LinkedIn Learning:** Course data sourced from LinkedIn Learning, referenced in JSON and injected into UI.
- **Vercel:** For deployment, use `vercel` CLI. Add `vercel.json` for clean URLs if desired.

## UI Color System & Design Tokens

All UI must use the following CSS custom properties:

```css
:root {
  --color-navy-900: #0a1a2f;
  --color-navy-700: #1a2e45;
  --color-maroon-700: #7a1e30;
  --color-maroon-500: #a8323c;
  --color-tan-400: #d8c7a3;
  --color-tan-300: #ede3c7;
  --color-silver-200: #e8ecef;
  --color-silver-400: #bcc3c7;
  --color-gray-600: #6e7a86;

  --text-primary: #0b0e11;
  --text-heading: #1d2935;
  --text-muted: #6e7a86;
  --text-on-dark: #ffffff;

  --bg-page: var(--color-silver-200);
  --bg-card: #ffffff;
  --bg-navbar: var(--color-navy-900);
  --btn-primary-bg: var(--color-maroon-700);
  --btn-primary-hover: var(--color-maroon-500);
}
```

**Usage Rules:**

- Page backgrounds: `var(--bg-page)` or `var(--color-tan-300)`
- Cards: `var(--bg-card)` with `var(--color-silver-200)` border
- Headings: `var(--text-heading)`
- Body text: `var(--text-primary)`
- Buttons: maroon for primary, navy for secondary
- Links: navy, hover maroon
- No neon, glow, or dark backgrounds

**Design Principles:**

1. Avoid harsh neon/saturated colors
2. Favor calm, high-contrast layouts
3. Use maroon for accents only
4. Keep UI clean, minimal, and enterprise-ready

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
- If colors or UI look inconsistent, verify all elements use the new design tokens and color variables.

---

_Review and update this file as new patterns or workflows emerge._

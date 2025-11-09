// assets/js/include.js
document.addEventListener("DOMContentLoaded", () => {
  const includeTargets = document.querySelectorAll("[data-include]");

  includeTargets.forEach(async (el) => {
    const file = el.getAttribute("data-include");
    try {
      const response = await fetch(file);
      if (!response.ok) throw new Error(`Could not fetch ${file}`);
      const html = await response.text();
      el.innerHTML = html;

      // 🔹 Run helper functions after navbar is loaded
      if (file.includes("navbar.html")) {
        fixNavbarLinks();
        highlightActiveLink();
      }

      // 🔹 Initialize scroll animations slightly after load
      setTimeout(animateOnScroll, 300);
    } catch (err) {
      console.error(err);
    }
  });
});

/**
 * Adjust navbar links depending on current page depth
 * Makes links work correctly from both index.html and /phases/ pages
 */
function fixNavbarLinks() {
  const isRoot =
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname === "/" ||
    !window.location.pathname.includes("/phases/");
  const links = document.querySelectorAll("[data-link]");
  links.forEach((link) => {
    const target = link.getAttribute("data-link");
    const href = isRoot ? target : `../${target}`;
    link.setAttribute("href", href);
  });
}

/**
 * Highlight the active page in the navbar
 */
function highlightActiveLink() {
  const currentPath = window.location.pathname.split("/").pop(); // e.g. "phase3.html"
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href && href.endsWith(currentPath)) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

/**
 * Animate cards when they come into view
 */
function animateOnScroll() {
  const cards = document.querySelectorAll(".glass-card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-visible");
          observer.unobserve(entry.target); // Trigger only once
        }
      });
    },
    { threshold: 0.15 }
  );
  cards.forEach((card) => observer.observe(card));
}

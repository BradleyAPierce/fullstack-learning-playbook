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

      // 🔹 After the navbar is loaded, highlight the current active link
      if (file.includes("navbar.html")) {
        highlightActiveLink();
      }
    } catch (err) {
      console.error(err);
    }
  });
});

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
 * Animate elements when they come into view
 */
function animateOnScroll() {
  const cards = document.querySelectorAll(".glass-card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-visible");
          observer.unobserve(entry.target); // trigger only once
        }
      });
    },
    { threshold: 0.15 }
  );
  cards.forEach((card) => observer.observe(card));
}

document.addEventListener("DOMContentLoaded", () => {
  // Run once navbar loads
  setTimeout(animateOnScroll, 300);
});

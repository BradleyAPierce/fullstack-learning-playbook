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

/**
 * Smooth scroll for internal anchor links (optional enhancement)
 */
document.addEventListener("click", (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (link) {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70, // offset for navbar height
        behavior: "smooth",
      });
    }
  }
});

// assets/js/include.js

document.addEventListener("DOMContentLoaded", () => {
  // Inject Navbar
  includeHTML("components/navbar.html", "navbar-placeholder");

  // Inject Footer
  includeHTML("components/footer.html", "footer-placeholder");

  // Set current year in footer dynamically
  const yearSpan = document.getElementById("currentYear");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});

function includeHTML(file, placeholderId) {
  fetch(file)
    .then((response) => {
      if (!response.ok) throw new Error(`Failed to load ${file}`);
      return response.text();
    })
    .then((data) => {
      document.getElementById(placeholderId).innerHTML = data;
    })
    .catch((error) => console.error(error));
}

// Scroll Progress Bar Logic
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById("scrollProgressBar").style.width =
    scrollPercent + "%";
});

// Back to Top Button Logic (with fade effect)
const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

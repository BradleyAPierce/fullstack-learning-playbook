// assets/js/include.js
document.addEventListener("DOMContentLoaded", () => {
  const includeTargets = document.querySelectorAll("[data-include]");

  includeTargets.forEach(async (el) => {
    const file = el.getAttribute("data-include");
    try {
      const response = await fetch(file);
      if (!response.ok) throw new Error(`Could not fetch ${file}`);
      el.innerHTML = await response.text();
    } catch (err) {
      console.error(err);
    }
  });
});

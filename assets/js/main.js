document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".timeline-item");

  items.forEach((item) => {
    item.addEventListener("click", () => {
      // Remove active from others
      items.forEach(i => i.classList.remove("active"));
      // Add to current
      item.classList.add("active");

      const phase = item.dataset.phase;
      window.location.href = `phases/phase${phase}.html`;
    });
  });
});

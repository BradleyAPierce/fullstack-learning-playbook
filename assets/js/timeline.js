// Smooth scroll to timeline
document.getElementById("scrollBtn").addEventListener("click", () => {
  document
    .querySelector(".timeline-section")
    .scrollIntoView({ behavior: "smooth" });
});

// Optional: activate node glow when in viewport
const nodes = document.querySelectorAll(".timeline-node");
window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.8;
  nodes.forEach((node) => {
    const top = node.getBoundingClientRect().top;
    node.classList.toggle("active", top < trigger);
  });
});

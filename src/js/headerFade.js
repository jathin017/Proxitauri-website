const header = document.getElementById("siteHeader");
const fadeDistance = 500;

function updateHeaderOpacity() {
  const opacity = Math.max(0, 1 - window.scrollY / fadeDistance);

  header.style.opacity = opacity;
  header.style.pointerEvents = opacity < 0.05 ? "none" : "auto";
}

updateHeaderOpacity();
window.addEventListener("scroll", updateHeaderOpacity, { passive: true });

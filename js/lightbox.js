// js/lightbox.js
(() => {
  // Create overlay if it doesn't exist
  let overlay = document.getElementById("lightboxOverlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "lightboxOverlay";
    overlay.innerHTML = `<img alt="Tattoo preview">`;
    document.body.appendChild(overlay);
  }

  const overlayImg = overlay.querySelector("img");

  const open = (src, alt = "") => {
    overlayImg.src = src;
    overlayImg.alt = alt;
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    overlay.classList.remove("open");
    overlayImg.src = "";
    document.body.style.overflow = "";
  };

  // Click outside image closes
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });

  // Escape closes
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  // Click any portfolio image
  document.addEventListener("click", (e) => {
    const img = e.target.closest(".portfolio-item img");
    if (!img) return;

    e.preventDefault();
    open(img.src, img.alt || "");
  });

  // Make images look clickable
  document.querySelectorAll(".portfolio-item img").forEach((img) => {
    img.style.cursor = "zoom-in";
  });
})();

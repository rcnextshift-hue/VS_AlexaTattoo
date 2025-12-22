// Hover preview overlay for portfolio images
(() => {
  // Create overlay once
  const overlay = document.createElement("div");
  overlay.id = "hoverPreviewOverlay";

  const bigImg = document.createElement("img");
  bigImg.alt = "Tattoo preview";
  overlay.appendChild(bigImg);

  document.body.appendChild(overlay);

  let closeTimer = null;

  const openPreview = (src) => {
    bigImg.src = src;
    overlay.classList.add("open");
  };

  const closePreview = () => {
    overlay.classList.remove("open");
    // optional: clear src so it doesn't keep memory
    bigImg.src = "";
  };

  // Close when clicking the dark background
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closePreview();
  });

  // Close with Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closePreview();
  });

  // Close when mouse leaves the BIG image (small delay so it doesn't feel twitchy)
  bigImg.addEventListener("mouseleave", () => {
    closeTimer = setTimeout(closePreview, 150);
  });
  bigImg.addEventListener("mouseenter", () => {
    if (closeTimer) clearTimeout(closeTimer);
  });

  // Hook up all portfolio images
  document.querySelectorAll(".portfolio-item img").forEach((img) => {
    img.addEventListener("mouseenter", () => openPreview(img.src));
    // Mobile/touch: tap to open
    img.addEventListener("click", (e) => {
      e.preventDefault();
      openPreview(img.src);
    });
  });
})();

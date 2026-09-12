// List of sticker images to pick from at random.
// Add or remove paths here to change what can show up.
const STICKER_PATHS = [
  "image/Icon/Icon1.png",
  "image/Icon/Icon2.png",
  "image/Icon/Icon3.png",
  "image/Icon/Icon4.png",
  "image/Icon/Icon5.png",
  "image/Icon/Icon6.png",
  "image/Icon/Icon7.png",
  "image/Icon/Icon8.png",
  "image/Icon/Icon9.png",
];

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("img.sticker").forEach((img) => {
    const pick = STICKER_PATHS[Math.floor(Math.random() * STICKER_PATHS.length)];
    img.src = pick;
  });
});

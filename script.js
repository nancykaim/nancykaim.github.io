// List of sticker images to pick from at random.
// Add or remove paths here to change what can show up.
const STICKER_PATHS = [
  "image/icon1.png",
  "image/icon2.png",
  "image/icon3.png",
  "image/icon4.png",
  "image/icon5.png",
  "image/icon6.png",
  "image/icon7.png",
];

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("img.sticker").forEach((img) => {
    const pick = STICKER_PATHS[Math.floor(Math.random() * STICKER_PATHS.length)];
    img.src = pick;
  });
});

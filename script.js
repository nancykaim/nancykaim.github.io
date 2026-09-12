// List of sticker images to pick from at random.
// Add or remove paths here to change what can show up.
const STICKER_PATHS = [
  "https://github.com/nancykaim/nancykaim.github.io/blob/main/image/Icon/Icon1.png",
  "https://github.com/nancykaim/nancykaim.github.io/blob/main/image/Icon/Icon2.png",
  "https://github.com/nancykaim/nancykaim.github.io/blob/main/image/Icon/Icon3.png",
  "https://github.com/nancykaim/nancykaim.github.io/blob/main/image/Icon/Icon4.png",
  "https://github.com/nancykaim/nancykaim.github.io/blob/main/image/Icon/Icon5.png",
  "https://github.com/nancykaim/nancykaim.github.io/blob/main/image/Icon/Icon6.png",
  "https://github.com/nancykaim/nancykaim.github.io/blob/main/image/Icon/Icon7.png",
  "https://github.com/nancykaim/nancykaim.github.io/blob/main/image/Icon/Icon8.png",
  "https://github.com/nancykaim/nancykaim.github.io/blob/main/image/Icon/Icon9.png",
];

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("img.sticker").forEach((img) => {
    const pick = STICKER_PATHS[Math.floor(Math.random() * STICKER_PATHS.length)];
    img.src = pick;
  });
});

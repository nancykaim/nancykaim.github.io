// List of sticker images to pick from at random.
// Add or remove paths here to change what can show up.
const STICKER_PATHS = [
  "./image/Icon/Icon1.png",
  "./image/Icon/Icon2.png",
  "./image/Icon/Icon3.png",
  "./image/Icon/Icon4.png",
  "./image/Icon/Icon5.png",
  "./image/Icon/Icon6.png",
  "./image/Icon/Icon7.png",
  "./image/Icon/Icon8.png",
  "./image/Icon/Icon9.png"
];

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("img.sticker").forEach((img) => {
    const pick = STICKER_PATHS[Math.floor(Math.random() * STICKER_PATHS.length)];
    img.src = pick;
  });
});


const starField = document.getElementById("star-field");

const stars = [];
const STAR_COUNT = 55;

let mouse = {
  x: -1000,
  y: -1000
};

// Create stars
for (let i = 0; i < STAR_COUNT; i++) {
  const star = document.createElement("div");
  star.className = "star";

  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;

  starField.appendChild(star);

  stars.push({
    element: star,

    x: x,
    y: y,

    // Starting position
    baseX: x,
    baseY: y,

    // Tiny floating movement
    vx: (Math.random() - 0.5) * 0.15,
    vy: (Math.random() - 0.5) * 0.15,

    // Different stars have slightly different sizes
    size: Math.random() * 4 + 2
  });

  star.style.width = `${stars[i].size}px`;
  star.style.height = `${stars[i].size}px`;
}

// Track mouse
window.addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

// When mouse leaves the page
window.addEventListener("mouseleave", () => {
  mouse.x = -1000;
  mouse.y = -1000;
});

function animate() {

  stars.forEach((star) => {

    // Tiny natural floating movement
    star.baseX += star.vx;
    star.baseY += star.vy;

    // Wrap around screen
    if (star.baseX < -20) star.baseX = window.innerWidth + 20;
    if (star.baseX > window.innerWidth + 20) star.baseX = -20;

    if (star.baseY < -20) star.baseY = window.innerHeight + 20;
    if (star.baseY > window.innerHeight + 20) star.baseY = -20;

    // Distance from mouse
    const dx = star.baseX - mouse.x;
    const dy = star.baseY - mouse.y;

    const distance = Math.sqrt(dx * dx + dy * dy);

    const interactionRadius = 110;

    let pushX = 0;
    let pushY = 0;

    // Push stars away from mouse
    if (distance < interactionRadius) {

      const force =
        (interactionRadius - distance) / interactionRadius;

      // Prevent division by zero
      const safeDistance = Math.max(distance, 1);

      pushX = (dx / safeDistance) * force * 35;
      pushY = (dy / safeDistance) * force * 35;
    }

    // Smooth movement
    star.x += (star.baseX + pushX - star.x) * 0.08;
    star.y += (star.baseY + pushY - star.y) * 0.08;

    star.element.style.transform =
      `translate(${star.x}px, ${star.y}px)`;
  });

  requestAnimationFrame(animate);
}

animate();

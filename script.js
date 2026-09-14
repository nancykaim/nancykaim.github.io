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


/* =========================
   Interactive Scrolling Star Field
   ========================= */

const starField = document.getElementById("star-field");

if (starField) {
  const STAR_COUNT = 70;
  const stars = [];

  let mouseX = -1000;
  let mouseY = -1000;

  const pageHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight
  );

  starField.style.height = `${pageHeight}px`;

  for (let i = 0; i < STAR_COUNT; i++) {
    const star = document.createElement("div");
    star.className = "star";

    const data = {
      element: star,
      x: Math.random() * window.innerWidth,
      y: Math.random() * pageHeight,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15
    };

    const size = 2 + Math.random() * 4;

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    star.style.transform =
      `translate(${data.x}px, ${data.y}px)`;

    star.style.animationDelay =
      `${Math.random() * 2.5}s`;

    starField.appendChild(star);

    stars.push(data);
  }

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY + window.scrollY;
  });

  function animate() {
    stars.forEach((star) => {
      star.x += star.vx;
      star.y += star.vy;

      const dx = star.x - mouseX;
      const dy = star.y - mouseY;

      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 130 && distance > 0) {
        const force = (130 - distance) / 130;

        star.x += (dx / distance) * force * 2;
        star.y += (dy / distance) * force * 2;
      }

      if (star.x < 0 || star.x > window.innerWidth) {
        star.vx *= -1;
      }

      if (star.y < 0 || star.y > pageHeight) {
        star.vy *= -1;
      }

      star.element.style.transform =
        `translate(${star.x}px, ${star.y}px)`;
    });

    requestAnimationFrame(animate);
  }

  animate();
}

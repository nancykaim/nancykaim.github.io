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

  const interactionRadius = 130;

  function getPageSize() {
    return {
      width: Math.max(
        document.documentElement.scrollWidth,
        document.body.scrollWidth
      ),
      height: Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      )
    };
  }

  function resizeStarField() {
    const pageSize = getPageSize();

    starField.style.width = `${pageSize.width}px`;
    starField.style.height = `${pageSize.height}px`;
  }

  resizeStarField();

  /* Create stars across the entire page */
  for (let i = 0; i < STAR_COUNT; i++) {
    const star = document.createElement("div");

    star.className = "star";

    const pageSize = getPageSize();

    const starData = {
      element: star,

      x: Math.random() * pageSize.width,
      y: Math.random() * pageSize.height,

      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,

      size: 2 + Math.random() * 4
    };

    star.style.width = `${starData.size}px`;
    star.style.height = `${starData.size}px`;

    star.style.animationDelay = `${Math.random() * 2.5}s`;

    starField.appendChild(star);

    stars.push(starData);
  }

  /* Track cursor relative to the whole document */
  document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX + window.scrollX;
    mouseY = event.clientY + window.scrollY;
  });

  /* Reset interaction when cursor leaves the page */
  document.addEventListener("mouseleave", () => {
    mouseX = -1000;
    mouseY = -1000;
  });

  function animateStars() {
    const pageSize = getPageSize();

    stars.forEach((star) => {
      /* Gentle natural movement */
      star.x += star.vx;
      star.y += star.vy;

      /* Cursor interaction */
      const dx = star.x - mouseX;
      const dy = star.y - mouseY;

      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < interactionRadius && distance > 0) {
        const force =
          (interactionRadius - distance) / interactionRadius;

        star.x += (dx / distance) * force * 2.5;
        star.y += (dy / distance) * force * 2.5;
      }

      /* Bounce gently within the entire document */
      if (star.x <= 0 || star.x >= pageSize.width) {
        star.vx *= -1;
        star.x = Math.max(0, Math.min(star.x, pageSize.width));
      }

      if (star.y <= 0 || star.y >= pageSize.height) {
        star.vy *= -1;
        star.y = Math.max(0, Math.min(star.y, pageSize.height));
      }

      /*
       * The star coordinates are document coordinates,
       * so they naturally move with the page when scrolling.
       */
      star.element.style.transform =
        `translate(${star.x}px, ${star.y}px)`;
    });

    requestAnimationFrame(animateStars);
  }

  animateStars();

  /* Recalculate when page dimensions change */
  window.addEventListener("resize", resizeStarField);

  window.addEventListener("load", () => {
    resizeStarField();
  });
}
  requestAnimationFrame(animate);
}

animate();

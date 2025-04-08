document.addEventListener("DOMContentLoaded", () => {
  const hamMenu = document.querySelector(".ham-menu");
  const offScreenMenu = document.querySelector(".off-screen-menu");
  const closeMenu = document.querySelector(".close-menu");

  if (!hamMenu || !offScreenMenu) return;

  // Toggle menu open/close
  hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");

    // Add/remove no-scroll class on <body> and <html>
    if (offScreenMenu.classList.contains("active")) {
      document.body.classList.add("no-scroll");
      document.documentElement.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
      document.documentElement.classList.remove("no-scroll");
    }
  });

  // Close button
  if (closeMenu) {
    closeMenu.addEventListener("click", () => {
      hamMenu.classList.remove("active");
      offScreenMenu.classList.remove("active");
      document.body.classList.remove("no-scroll");
      document.documentElement.classList.remove("no-scroll");
    });
  }

  // Optional: Close menu when a nav link is clicked
  offScreenMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      hamMenu.classList.remove("active");
      offScreenMenu.classList.remove("active");
      document.body.classList.remove("no-scroll");
      document.documentElement.classList.remove("no-scroll");
    });
  });
});

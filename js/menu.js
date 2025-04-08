document.addEventListener("DOMContentLoaded", () => {
    const hamMenu = document.querySelector(".ham-menu");
    const offScreenMenu = document.querySelector(".off-screen-menu");
    const closeMenu = document.querySelector(".close-menu");
  
    if (!hamMenu || !offScreenMenu) return;
  
    // Toggle menu open/close
    hamMenu.addEventListener("click", () => {
      hamMenu.classList.toggle("active");
      offScreenMenu.classList.toggle("active");
  
      // Lock/unlock scroll
      document.body.style.overflow = offScreenMenu.classList.contains("active") ? "hidden" : "";
    });
  
    // Close button
    if (closeMenu) {
      closeMenu.addEventListener("click", () => {
        hamMenu.classList.remove("active");
        offScreenMenu.classList.remove("active");
        document.body.style.overflow = "";
      });
    }
    document.body.classList.add("no-scroll");
    document.body.classList.remove("no-scroll");
    
    // Optional: Close menu when a nav link is clicked
    offScreenMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        hamMenu.classList.remove("active");
        offScreenMenu.classList.remove("active");
        document.body.style.overflow = "";
      });
    });
  });
  closeMenu.addEventListener("click", () => {
    console.log("Close button clicked");
    hamMenu.classList.remove("active");
    offScreenMenu.classList.remove("active");
    document.body.style.overflow = "";
  });
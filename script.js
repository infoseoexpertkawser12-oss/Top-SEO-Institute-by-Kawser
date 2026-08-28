Kawser, [8/28/2026 3:16 PM]
document.addEventListener("DOMContentLoaded", function () {

  /* =========================================
     1. SMOOTH SCROLLING
  ========================================= */

  const navLinks = document.querySelectorAll('a[href^="#"]');
  const navbar = document.querySelector(".navbar");

  navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

      const targetId = this.getAttribute("href");

      // Ignore empty "#"
      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (target) {

        event.preventDefault();

        const navbarHeight = navbar
          ? navbar.offsetHeight
          : 0;

        const targetPosition =
          target.getBoundingClientRect().top +
          window.pageYOffset -
          navbarHeight -
          10;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });

      }

    });

  });


  /* =========================================
     2. CURRENT YEAR
  ========================================= */

  const copyright = document.querySelector(".copyright");

  if (copyright) {

    const currentYear = new Date().getFullYear();

    copyright.textContent =
      "© " +
      currentYear +
      " Top SEO Institute by Kawser. All Rights Reserved.";

  }


  /* =========================================
     3. SCROLL REVEAL ANIMATION
  ========================================= */

  const animatedElements = document.querySelectorAll(
    ".service-card, " +
    ".portfolio-card, " +
    ".review-card, " +
    ".social-card, " +
    ".contact-card"
  );


  /*
     Add animation CSS automatically.
     This means you don't need to add
     extra CSS manually.
  */

  const animationStyle = document.createElement("style");

  animationStyle.textContent = 
    
    .scroll-reveal {
      opacity: 0;
      transform: translateY(25px);
      transition:
        opacity 0.6s ease,
        transform 0.6s ease;
    }

    .scroll-reveal.show {
      opacity: 1;
      transform: translateY(0);
    }

    @media (prefers-reduced-motion: reduce) {
      .scroll-reveal {
        opacity: 1;
        transform: none;
        transition: none;
      }
    }

  ;

  document.head.appendChild(animationStyle);


  /* =========================================
     4. INTERSECTION OBSERVER
  ========================================= */

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
      function (entries, observerInstance) {

        entries.forEach(function (entry) {

          if (entry.isIntersecting) {

            entry.target.classList.add("show");

            // Stop observing after animation
            observerInstance.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px"
      }
    );


    animatedElements.forEach(function (element, index) {

      element.classList.add("scroll-reveal");

      /*
        Small delay for a smooth card-by-card effect
      */

      element.style.transitionDelay =
        (index % 3) * 0.08 + "s";

      observer.observe(element);

    });

  } else {

    /*
      Fallback for older browsers
    */

    animatedElements.forEach(function (element) {

      element.style.opacity = "1";
      element.style.transform = "none";

    });

  }


  /* =========================================
     5. EXTERNAL LINKS
  ========================================= */

  const externalLinks = document.querySelectorAll(
    'a[target="_blank"]'
  );

  externalLinks.forEach(function (link) {

    link.setAttribute("rel", "noopener noreferrer");

  });


  /* =========================================
     6. NAVBAR SHADOW ON SCROLL
  ========================================= */

  function handleNavbarScroll() {

    if (!navbar) {
      return;
    }

    if (window.scrollY > 20) {

      navbar.classList.add("navbar-scrolled");

    } else {

Kawser, [8/28/2026 3:16 PM]
navbar.classList.remove("navbar-scrolled");

    }

  }

  window.addEventListener(
    "scroll",
    handleNavbarScroll,
    { passive: true }
  );

  handleNavbarScroll();


  /* =========================================
     7. NAVBAR SCROLL STYLE
  ========================================= */

  const navbarStyle = document.createElement("style");

  navbarStyle.textContent = 
    
    .navbar {
      transition:
        box-shadow 0.3s ease,
        background 0.3s ease;
    }

    .navbar.navbar-scrolled {
      box-shadow: 0 8px 30px rgba(15, 23, 42, 0.08);
      background: rgba(255, 255, 255, 0.98);
    }

  ;

  document.head.appendChild(navbarStyle);


  /* =========================================
     8. PREVENT BROKEN IMAGE LAYOUT
  ========================================= */

  const images = document.querySelectorAll("img");

  images.forEach(function (image) {

    image.addEventListener("error", function () {

      console.warn(
        "Image could not be loaded:",
        image.getAttribute("src")
      );

    });

  });


  /* =========================================
     9. PAGE LOADED
  ========================================= */

  document.body.classList.add("page-loaded");

});

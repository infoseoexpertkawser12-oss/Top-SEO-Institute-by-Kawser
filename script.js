Kawser, [8/28/2026 2:34 PM]
document.addEventListener("DOMContentLoaded", function () {

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

    });

  });


  // Current year
  const copyright = document.querySelector(".copyright");

  if (copyright) {
    copyright.innerHTML =
      "© " + new Date().getFullYear() +
      " Top SEO Institute by Kawser. All Rights Reserved.";
  }


  // Simple scroll animation
  const cards = document.querySelectorAll(
    ".service-card, .portfolio-card, .review-card, .social-card, .contact-card"
  );

  const observer = new IntersectionObserver(
    function (entries) {

      entries.forEach(function (entry) {

        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }

      });

    },
    {
      threshold: 0.1
    }
  );


  cards.forEach(function (card) {

    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);

  });

});

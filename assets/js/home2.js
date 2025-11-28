document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const mobileToggle = document.querySelector(".mobile-toggle");
  const nav = document.querySelector(".main-nav");

  // Hamburger menu toggle functionality
  if (mobileToggle && nav) {
    mobileToggle.addEventListener("click", (evt) => {
      evt.preventDefault();
      evt.stopPropagation();
      body.classList.toggle("mobile-nav-open");
    });

    // Close menu when clicking navigation links
    const closeNavOnLink = (evt) => {
      const link = evt.target.closest("a");
      if (link) {
        body.classList.remove("mobile-nav-open");
      }
    };

    nav.addEventListener("click", closeNavOnLink);

    // Close menu when clicking outside
    const closeMobileNav = (evt) => {
      if (body.classList.contains("mobile-nav-open")) {
        const target = evt.target;
        if (!nav.contains(target) && !mobileToggle.contains(target)) {
          body.classList.remove("mobile-nav-open");
        }
      }
    };

    document.addEventListener("click", closeMobileNav);
  }

  if (typeof Swiper !== "undefined") {
    new Swiper(".home2-carousel", {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      autoplay: {
      delay: 4200,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        780: {
          slidesPerView: 2,
        },
        1180: {
          slidesPerView: 3,
        },
      },
    });
  }

  if (window.AOS) {
    AOS.init({
      duration: 900,
      once: true,
      offset: 120,
    });
  }

  if (window.jQuery) {
    const $ = window.jQuery;
    $(".home2-step").each(function (index) {
      $(this).attr("data-aos", "fade-up").attr("data-aos-delay", index * 120);
    });

    $(".home2-destination-card").hover(
      function () {
        $(this).addClass("is-hovered");
      },
      function () {
        $(this).removeClass("is-hovered");
      }
    );
  }
});


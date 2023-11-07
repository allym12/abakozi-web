  // Initialize the main carousel
  $('#carouselExample').carousel();
  // Set the interval for automatic sliding (e.g., 5 seconds)
  $('#carouselExample').carousel({
      interval: 5000 // Time in milliseconds
  });
  // Initialize the sliding cards carousel
  $('#cardCarousel').carousel();
  // Set the interval for automatic sliding (e.g., 5 seconds)
  $('#cardCarousel').carousel({
      interval: 5000 // Time in milliseconds
  });


var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });
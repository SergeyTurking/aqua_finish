var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      // угол поворота
      rotate:20,
      stretch: 0,
       // глубина
      depth: 500,
      modifier: 1,
      // тень false или true
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
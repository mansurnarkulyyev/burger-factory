var swiper = new Swiper(".mySwiper", {
  // slidesPerView: 4,
  // spaceBetween: 30,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    }
  }
});

$(function() {
  console.log('Hello Bootstrap5');
});

var swiper = new Swiper(".mySwiper", {
  breakpoints: {
    100:{
      slidesPerView: 1.1,
      spaceBetween: 10
    },
    // when window width is >= 320px
    320: {
      slidesPerView: 2.5,
      spaceBetween: 10
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    600:{
      slidesPerView: 4,
      spaceBetween: 20
    },
    820:{
      slidesPerView: 2.5,
      spaceBetween: 20
    },
    // when window width is >= 640px
    980: {
      slidesPerView: 4.5,
      spaceBetween: 20
    }
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  pagination: {
    el: '.swiper-pagination',
  }
});
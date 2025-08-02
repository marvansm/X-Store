var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    568: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1150: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".comments", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});
var swiper = new Swiper(".mySwipper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.addEventListener("DOMContentLoaded", () => {
  var typed = new Typed("#text", {
    strings: ["Drives Emotion", "Changed The World"],
    typeSpeed: 90,
    backSpeed: 40,
    backDelay: 1500,
    loop: true,
  });
});

const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMobile = document.querySelector(".close-mobile");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.add("open");
});

closeMobile.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
});

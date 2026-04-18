import Swiper from "swiper";
import "swiper/css";
window.addEventListener("load", () => {
  const burgerButton = document.querySelector(".burger-btn");
  const header = document.querySelector(".header");
  burgerButton?.addEventListener("click", () => {
    header?.classList.toggle("opened-menu");
  });
  header?.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("menu__link") &&
      header.classList.contains("opened-menu")
    ) {
      header.classList.remove("opened-menu");
    }
  });

  //SCROLLER
  const clientsScroller = document.querySelector(".clients__scroller");
  const scrollerList = clientsScroller?.querySelector(".clients__list");
  const scrollerListContent = [...scrollerList.children];
  let counter = Math.ceil(
    (clientsScroller.scrollWidth * 2) / scrollerList.scrollWidth,
  );
  if (counter % 2 === 0) counter--;

  while (counter > 0) {
    scrollerListContent.forEach((item) => {
      const dublicateItem = item.cloneNode(true);
      dublicateItem.setAttribute("aria-hidden", true);
      scrollerList.appendChild(dublicateItem);
    });
    counter--;
  }
  //---Scrolller animation settings-----------------------
  const totalWidth = scrollerList.scrollWidth / 2;
  const animationSpeed = scrollerList.dataset.speed || 60;
  const duration = Math.floor(totalWidth / animationSpeed);
    scrollerList.style.animationDuration = `${duration}s`;
    


const worksSwiper = new Swiper(".works__slider.swiper", {
  //   loop: true,
  //   slidesPerView: 1,
  //   spaceBetween: 10,
  speed: 2000,
  grabCursor: true,
  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    450: {
      slidesPerView: 2.3,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 3.1,
      spaceBetween: 15,
    },

    992: {
      slidesPerView: 3.4,
      spaceBetween: 24,
    },
    1440: {
      //   loop: true,
      slidesPerView: "auto",
      spaceBetween: 24,
      centerInsufficientSlides: true,
    },
  },
});
const testimonialsSwiper = new Swiper(".testimonials__slider.swiper", {
  slidesPerView: "auto",
  spaceBetween: 24,
  centerInsufficientSlides: true,
  speed: 2000,
  grabCursor: true,
});
});

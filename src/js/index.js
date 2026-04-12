
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
  //---Scrolller-----------------------
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
    
});

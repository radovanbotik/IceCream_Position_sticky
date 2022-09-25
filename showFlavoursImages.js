const flavours = document.querySelectorAll(".flavours__list__item");
const flavoursImages = document.querySelectorAll(".flavours__list__item img");

const showFlavoursImages = () => {
  flavours.forEach((flavour, index) => {
    const image = flavour.querySelector("img");
    const imageWidth = image.getBoundingClientRect().width;
    flavour.addEventListener("mousemove", e => {
      console.log(e);
      image.style.opacity = 1;
      image.style.transform = `translateX(${e.clientX - imageWidth}px)`;
    });
    flavour.addEventListener("mouseleave", e => {
      image.style.opacity = 0;
    });
  });
};

export { showFlavoursImages };

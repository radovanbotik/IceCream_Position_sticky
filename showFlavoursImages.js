const flavours = document.querySelectorAll(".flavours__list__item");
const flavoursImages = document.querySelectorAll(".flavours__list__item img");

const showFlavoursImages = () => {
  flavours.forEach((flavour, index) => {
    const image = flavour.querySelector("img");
    const imageWidth = image.getBoundingClientRect().width;
    flavour.addEventListener("mousemove", e => {
      image.style.opacity = 1;
      image.style.transform = `translateX(${
        e.clientX - imageWidth
      }px) translateY(${-e.clientY / 2}px) rotate(${
        e.clientX / 20
      }deg) scale(1.2)`;
    });
    flavour.addEventListener("mouseleave", e => {
      image.style.opacity = 0;
      image.style.transform = `translateX(${
        e.clientX
      }px) translateY(${-e.clientY}px) rotate(${e.clientX / 20}deg) scale(1)`;
    });
  });
};

export { showFlavoursImages };

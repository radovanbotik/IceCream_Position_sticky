import { getElement } from "./getElement.js";
const header = getElement("#site-header");

const headerHandler = () => {
  const options = {
    threshold: 1,
  };
  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.boundingClientRect.y === 0) {
        document.querySelector(".navbar").classList.add("swap-colors");
      } else {
        document.querySelector(".navbar").classList.remove("swap-colors");
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);
  observer.observe(document.querySelector("#control-products-data"));

  let previousScroll = 0;
  window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;
    if (previousScroll < currentScroll) {
      header.classList.add("logo-sizedown");
    } else {
      header.classList.remove("logo-sizedown");
    }
    currentScroll = previousScroll;
  });
};

export { headerHandler };

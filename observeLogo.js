import { getElement } from "./getElement.js";
const logo = getElement("header");
const firstSection = getElement("section");

const observeLogo = () => {
  console.log(firstSection);
  const options = {
    threshold: 0,
  };

  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        logo.classList.add("logo-sizedown");
      } else {
        logo.classList.remove("logo-sizedown");
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);

  observer.observe(firstSection);
};

export { observeLogo };

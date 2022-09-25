import { getElement } from "./getElement.js";
// const threshold = getElement(".threshold");
const flavoursListItems = [
  ...document.querySelectorAll(".flavours__list__item"),
];

const showFlavours = () => {
  const options = {
    threshold: 1,
  };
  const callback = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log(entry.target);
        entry.target.children[0].style.transform = `translateY(0%)`;
      } else {
        entry.target.children[0].style.transform = `translateY(200%)`;
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  flavoursListItems.forEach(li => {
    observer.observe(li);
  });
};

export { showFlavours };

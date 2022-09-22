import { getElement } from "./getElement.js";
import { renderIngredients } from "./renderIngredients.js";

const observeProducts = productsRight => {
  const products = [...productsRight.querySelectorAll("article")];
  const options = {
    threshold: 0.5,
  };

  const productsCallback = entries => {
    entries.map(entry => {
      if (entry.isIntersecting) {
        // console.log(entry.target, " is intersecting");
        renderIngredients(entry.target);
        entry.target.style.opacity = 1;
        return entry.target;
      } else {
        // console.log(entry.target, " is not intersecting");
        entry.target.style.opacity = 0.3;
      }
    });
  };

  const observer = new IntersectionObserver(productsCallback, options);
  products.forEach(product => {
    observer.observe(product);
  });
};

export { observeProducts };

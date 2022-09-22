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
        return entry.target;
      } else {
        // console.log(entry.target, " is not intersecting");
      }
    });
  };

  const observer = new IntersectionObserver(productsCallback, options);
  products.forEach(product => {
    observer.observe(product);
  });
};

export { observeProducts };

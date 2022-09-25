import { getElement } from "./getElement.js";
import { renderIngredients } from "./renderIngredients.js";

const observeImages = productsRight => {
  const products = [...productsRight.querySelectorAll("article")];
  const options = {
    threshold: 0.5,
  };

  const productsCallback = entries => {
    entries.map(entry => {
      if (entry.isIntersecting) {
        renderIngredients(entry.target);
        console.log(entry);
        entry.target.style.opacity = 1;
        return entry.target;
      } else {
        entry.target.style.opacity = 0.3;
      }
    });
  };

  const observer = new IntersectionObserver(productsCallback, options);
  products.forEach(product => {
    observer.observe(product);
  });
};

export { observeImages };

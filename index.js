import { getElement } from "./getElement.js";
import { observeProducts } from "./observeProducts.js";
import { renderProducts } from "./renderProducts.js";

window.addEventListener("DOMContentLoaded", () => {
  const renderedProducts = renderProducts();
  observeProducts(renderedProducts);
});

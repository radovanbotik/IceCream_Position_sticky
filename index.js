import { getElement } from "./getElement.js";
import { observeProducts } from "./observeProducts.js";
import { renderProducts } from "./renderProducts.js";
import { observeLogo } from "./observeLogo.js";

window.addEventListener("DOMContentLoaded", () => {
  observeLogo();
  const renderedProducts = renderProducts();
  observeProducts(renderedProducts);
});

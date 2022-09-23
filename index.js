import { getElement } from "./getElement.js";
import { observeProducts } from "./observeProducts.js";
import { renderProducts } from "./renderProducts.js";
import { headerHandler } from "./headerHandler.js";

window.addEventListener("DOMContentLoaded", () => {
  headerHandler();
  const renderedProducts = renderProducts();
  observeProducts(renderedProducts);
});

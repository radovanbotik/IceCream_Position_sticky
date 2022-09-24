import { observeProducts } from "./observeProducts.js";
import { renderProducts } from "./renderProducts.js";
import { headerHandler } from "./headerHandler.js";
import { hoverRotate } from "./hoverRotate.js";

window.addEventListener("DOMContentLoaded", () => {
  headerHandler();
  hoverRotate();
  const renderedProducts = renderProducts();
  observeProducts(renderedProducts);
});

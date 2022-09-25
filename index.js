import { observeImages } from "./observeImages.js";
import { renderImages } from "./renderImages.js";
import { headerHandler } from "./headerHandler.js";
import { hoverRotate } from "./hoverRotate.js";
import { showFlavours } from "./showFlavours.js";
import { showFlavoursImages } from "./showFlavoursImages.js";

window.addEventListener("DOMContentLoaded", () => {
  headerHandler();
  hoverRotate();
  const renderedProducts = renderImages();
  observeImages(renderedProducts);
  showFlavours();
  showFlavoursImages();
});

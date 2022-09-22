import { products } from "./products.js";
import { recipes } from "./recipes.js";
import { getElement } from "./getElement.js";

const productViewRight = getElement(".product-view-right");

const renderProducts = () => {
  const productsHTML = products
    .map(product => {
      const { id, image } = product;
      return `
    <article id="${id}">
      <img
         src="${image}"
         alt="portrait of product ${id}"
         />
    </article>
    `;
    })
    .join("");
  productViewRight.innerHTML = productsHTML;
};

window.addEventListener("DOMContentLoaded", () => {
  renderProducts();
});

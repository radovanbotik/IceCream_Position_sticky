import { getElement } from "./getElement.js";
import { products } from "./products.js";

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
  return productViewRight;
};

export { renderProducts };

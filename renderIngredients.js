import { recipes } from "./recipes.js";
import { getElement } from "./getElement.js";
const ingredientsDOM = getElement("#products-data");

const renderIngredients = product => {
  const currentRecipe = recipes.filter(recipe => {
    return recipe.id === product.id;
  });
  const { id: productTitle } = currentRecipe[0];
  const productIngredients = currentRecipe[0].ingredients;
  const ingredientsList = productIngredients
    .map(obj => {
      return `
    <li class='link'>
      <span>${obj.ingredient}</span>
      <img
        src="${obj.image}"
        alt="picture of ${obj.ingredient}"
      />
    `;
    })
    .join("");

  ingredientsDOM.innerHTML = `
  <h1 class='title'>${productTitle}</h1>
 
  <div class='subtitle-control'>
  <h4 class='subtitle'>${productIngredients.length} organic ingredients:</h4>
  <svg class='doodle-down' width="100%" height="100%" viewBox="0 0 162 119" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.913757 114.53C13.9807 116.216 32.3056 122.378 43.7012 113.083C51.0025 107.128 57.0714 99.6064 62.6869 92.0921C73.647 77.4257 81.4769 57.0014 83.9262 38.9656C86.7749 17.9886 65.2558 22.4197 58.3958 36.6239C48.6178 56.8698 53.4826 94.2165 79.0133 100.444C108.309 107.591 123.562 71.7844 130.096 49.9154C134.773 34.2631 153.849 -9.9389 143.644 2.81731C137.309 10.736 128.12 15.6577 122.008 23.6058C118.81 27.7641 121.911 27.9558 125.382 25.0963C131.067 20.4118 136.477 14.6482 140.667 8.60318C141.379 7.57589 145.275 0.763508 146.837 3.12604C151.902 10.7886 153.525 20.5514 158.568 28.4832" stroke="black" stroke-width="2" stroke-linecap="round"></path>
  <path d="M132.848 24.4348C141.945 26.8851 150.961 28.4036 160.05 30.4235C162.841 31.0437 159.046 30.7305 158.171 30.7851" stroke="black" stroke-width="2" stroke-linecap="round"></path>
</svg>
  </div>


  <ul class='product-list'>
   ${ingredientsList}
  </ul>
  <button class="button-shop button-order">Order Now<svg class='doodle-heart' width="99" height="91" viewBox="0 0 99 91" fill="black" xmlns="http://www.w3.org/2000/svg">
  <path d="M46.5897 90C32.2617 82.5795 21.668 75.8216 13.4112 62.0208C9.00167 54.6506 4.91717 47.0127 2.69169 38.6607C-0.54097 26.5288 0.793624 10.3852 12.9895 3.52983C28.1392 -4.9859 49.2008 9.31642 45.2853 26.7698C45.1636 27.3123 43.6421 30.6293 44.4297 28.79C48.6716 18.8834 61.263 9.74938 71.1476 6.48662C86.7877 1.32402 97.7846 9.63273 97.1912 26.0637C96.7624 37.9369 88.4709 51.895 80.1949 60.0373C70.4344 69.6401 57.315 75.4033 50.4294 87.5728" stroke="black" stroke-width="1.83638" stroke-linecap="round"></path>
</svg></button>
  `;
};
export { renderIngredients };

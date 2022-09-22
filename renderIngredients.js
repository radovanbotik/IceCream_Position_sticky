import { recipes } from "./recipes.js";
import { getElement } from "./getElement.js";
const ingredientsDOM = getElement(".left .grid-control");

const renderIngredients = product => {
  const currentRecipe = recipes.filter(recipe => {
    return recipe.id === product.id;
  });
  const { id: productTitle } = currentRecipe[0];
  const productIngredients = currentRecipe[0].ingredients;
  console.log(productIngredients);
  const ingredientsList = productIngredients
    .map(obj => {
      return `
    <li>
      <span>${obj.ingredient}</span>
      <img
        src="${obj.image}"
        alt="picture of ${obj.ingredient}"
      />
    `;
    })
    .join("");

  ingredientsDOM.innerHTML = `
  <h1>${productTitle}</h1>
  <h4>Is made out of ${productIngredients.length} basic ingredients:</h4>
  <ul>
   ${ingredientsList}
  </ul>
  <button class="button-shop">Order Now</button>
  `;
  //   const listItems = [...ingredientsDOM.querySelector("ul").children];
  //   listItems.forEach(li => {
  //     li.style.opacity = 1;
  //   });
};
export { renderIngredients };

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
  <h4>is made of ${productIngredients.length} ingredients:</h4>
  <ul>
   ${ingredientsList}
  </ul>
  <button class="button-shop">shop now</button>
  `;
};
export { renderIngredients };

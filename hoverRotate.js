import { getElement } from "./getElement.js";
const heroTitle = getElement("#herosection-main-title");

const hoverRotate = () => {
  const heroTitleSplit = [...heroTitle.innerText];
  heroTitle.innerHTML = heroTitleSplit
    .map(character => {
      return `
    <span>${character}</span>
    `;
    })
    .join("");
};

export { hoverRotate };

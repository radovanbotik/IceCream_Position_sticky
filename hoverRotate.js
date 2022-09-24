import { getElement } from "./getElement.js";
const heroTitle = getElement(".hero-title");

const hoverRotate = () => {
  const heroTitleSplit = [...heroTitle.textContent];
  heroTitle.innerHTML = heroTitleSplit
    .map(character => {
      return `
    <span>${character}</span>
    `;
    })
    .join("");
};

export { hoverRotate };

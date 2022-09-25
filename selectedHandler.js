import { boxes } from "./boxes.js";
import { getElement } from "./getElement.js";

const selected = getElement(".selected");

const selectedHandler = () => {
  selected.innerHTML = boxes
    .map((box, index) => {
      return `
        <article class="selected__card">
        <h1 class="selected__card__title">${box.id}</h1>
        <button class="">
          Have Some<svg
            class="doodle-heart"
            width="99"
            height="91"
            viewBox="0 0 99 91"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M46.5897 90C32.2617 82.5795 21.668 75.8216 13.4112 62.0208C9.00167 54.6506 4.91717 47.0127 2.69169 38.6607C-0.54097 26.5288 0.793624 10.3852 12.9895 3.52983C28.1392 -4.9859 49.2008 9.31642 45.2853 26.7698C45.1636 27.3123 43.6421 30.6293 44.4297 28.79C48.6716 18.8834 61.263 9.74938 71.1476 6.48662C86.7877 1.32402 97.7846 9.63273 97.1912 26.0637C96.7624 37.9369 88.4709 51.895 80.1949 60.0373C70.4344 69.6401 57.315 75.4033 50.4294 87.5728"
              stroke="black"
              stroke-width="1.83638"
              stroke-linecap="round"
            ></path>
          </svg>
        </button>
      </article>
        `;
    })
    .join("");
  [...selected.children].forEach((card, i) => {
    const currentbox = boxes.filter((box, index) => index === i);
    card.style.backgroundImage = `url(..${currentbox[0].imgfront})`;
    card.addEventListener("mouseenter", () => {
      card.style.backgroundImage = `url(..${currentbox[0].imgback})`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.backgroundImage = `url(..${currentbox[0].imgfront})`;
    });
  });
};

export { selectedHandler };

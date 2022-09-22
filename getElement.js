const getElement = selector => {
  if (document.querySelector(selector)) {
    return document.querySelector(selector);
  } else {
    throw Error("incorrect selector, check your selector again");
  }
};

export { getElement };

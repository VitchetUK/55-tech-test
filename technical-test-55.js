// Clone relevant infos into arrays
const liItems = [...document.querySelectorAll("li.l-productgrid__item")].filter(
  (elem) => !elem.matches(".l-productgrid__item--editorial")
);
const itemsRects = [...document.querySelectorAll(".c-product__item")].map(
  (el) => el.getBoundingClientRect()
);
const itemsName = [...document.querySelectorAll(".c-product__name")].map(
  (el) => el.innerHTML
);
const itemsPrice = [
  ...document.querySelectorAll(".c-price__value--current"),
].map((el) => el.innerHTML);

// Function that loop through every items and console log if the if condition is met
function getInfo() {
  for (let i = 0; i < liItems.length; i++) {
    const oneRectShoe = itemsRects[i];
    const oneItemName = itemsName[i].trim();
    const oneItemPrice = itemsPrice[i].trim();
    if (oneRectShoe.top <= oneRectShoe.height * 1.25) {
      let result = `Name:${oneItemName} Price:${oneItemPrice}`;
      console.log(result);
    } else {
      return;
    }
  }
}

getInfo();

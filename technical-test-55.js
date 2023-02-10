// Wrap into a function to update all infos when called in the scroll event.
function getAll() {
  // Clone relevant infos into arrays.

  const liItems = [
    ...document.querySelectorAll("li.l-productgrid__item"),
  ].filter((el) => !el.matches(".l-productgrid__item--editorial"));
  const itemsRects = [...document.querySelectorAll(".c-product__item")].map(
    (el) => el.getBoundingClientRect()
  );
  const itemsName = [...document.querySelectorAll(".c-product__name")].map(
    (el) => el.innerHTML
  );
  const itemsPrice = [
    ...document.querySelectorAll(".c-price__value--current"),
  ].map((el) => el.innerHTML);

  // Function that loop through every items and console log if the if condition is met.
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
}

getAll();

window.addEventListener("scroll", handleScroll);

// Create first breakpoint where the console log will be executed once.
let scrollBreak = (window.innerHeight / 4) * -1;

function handleScroll() {
  const firstLiItem = document.querySelector(".l-productgrid__item");
  let rect = firstLiItem.getBoundingClientRect();

  // Since it will become a negative value, we multiply by -1 to get positive value.
  let scrollTrack = rect.top * -1;

  // When track point meet break point, log on-screen items and set new break point.
  if (scrollTrack >= scrollBreak) {
    getAll();
    scrollBreak += rect.height;
    //console.log(scrollBreak);
    //console.log(scrollTrack);
  }
}

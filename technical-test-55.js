class Shoes {
  constructor(name, price, id) {
    this.name = name;
    this.price = price;

    // this.id = id;
  }

  // Execute a console log of the current shoe.
  displayInfo() {
    console.log(`Name:${this.name}Price:${this.price}Id:${this.id}`);
  }
}

function getInfo() {
  // Get all the loaded items while excluding the banner image listed as a li.
  const liItems = [
    ...document.querySelectorAll("li.l-productgrid__item"),
  ].filter((elem) => !elem.matches(".l-productgrid__item--editorial"));

  const divItem = document.querySelector(".l-productgrid__wrapper");

  // Get all the newly loaded items not included in the initial load.
  const liDataAction = [
    ...divItem.querySelectorAll('[data-action="loadMoreProducts"]'),
  ].filter((elem) => !elem.matches(".l-productgrid__item--editorial"));
  //const divEdito = document.querySelector(".l-productgrid__item--editorial")

  //console.log(liDataAction.length);

  // Loop over every items to retrieve the information we're looking for. Execute displayInfo before going over the next item.
  for (let i = 0; i < liItems.length; i++) {
    const itemName = document.getElementsByClassName("c-product__name");
    const itemPrice = document.getElementsByClassName(
      "c-price__value--current"
    );

    // WIP: Tried to retrieve the unique PID of each item.
    //const itemIdDiv = document.querySelector(".c-product");
    //const itemIdDataPid = itemIdDiv.dataset.pid;

    let product = new Shoes(
      itemName[i].textContent,
      itemPrice[i].textContent
      // itemIdDataPid
    );
    product.displayInfo();
  }
}

// Execute getInfo() to retrieve name and price of every items.
getInfo();

// Observer used to re-execute getInfo() everytime new items are loaded.
const observerUpdt = document.querySelector(".l-productgrid__inner");
const config = { childList: true };
const callback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.type === "childList") {
      getInfo();
    } else {
      return;
    }
  }
};

const observer = new MutationObserver(callback);
observer.observe(observerUpdt, config);

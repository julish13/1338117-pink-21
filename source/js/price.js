"use strict";

const price = document.querySelector(`.price`);
const priceTable = price.querySelector(`.price__list`);
const priceToggles = price.querySelector(`.slider__toggles`);

let slidePriceList = function (index) {
  priceTable.style.transform = `translateX(${-31.3333 * index}%)`;
};

createDotsSlider(slidePriceList, priceToggles);

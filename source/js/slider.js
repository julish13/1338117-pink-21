"use strict";

function createDotsSlider(cb, toggles, slidesList) {
  for (let i = 0; i < toggles.children.length; i++) {
    toggles.children[i].addEventListener(`click`, function () {
      let currentToggle = toggles.querySelector(`.slider__toggle--current`);
      currentToggle.classList.remove(`slider__toggle--current`);
      toggles.children[i].classList.add(`slider__toggle--current`);

      cb(i, slidesList);
    });
  }
}

function changeSlide(index, slidesList) {
  let currentSlide = slidesList.querySelector(`.slider__slide--current`);
  currentSlide.classList.remove(`slider__slide--current`);
  slidesList.children[index].classList.add(`slider__slide--current`);
}

function createArrowsSlider(arrow, direction, slidesList) {
  arrow.addEventListener(`click`, function () {
    let currentSlide = slidesList.querySelector(`.slider__slide--current`);
    let nextSlide =
      direction === `right`
        ? currentSlide.nextElementSibling
        : direction === `left`
        ? currentSlide.previousElementSibling
        : 0;
    if (nextSlide) {
      nextSlide.classList.add(`slider__slide--current`);
      currentSlide.classList.remove(`slider__slide--current`);
    }
  });
}

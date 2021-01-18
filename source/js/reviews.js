"use strict";

const reviews = document.querySelector(`.reviews`);
const reviewsList = reviews.querySelector(`.reviews__list`);
const reviewsSliders = reviews.querySelectorAll(`.slider__slide`);
const reviewsToggles = reviews.querySelectorAll(`.slider__toggles`);
const reviewsOptions = reviews.querySelector(`.slider__options`);
const leftArrow = reviewsOptions.querySelector(`.slider__arrow--left`);
const rightArrow = reviewsOptions.querySelector(`.slider__arrow--right`);

for (const slide of reviewsSliders) {
  slide.classList.remove(`slider__slide--nojs`);
  slide.classList.add(`slider__slide--js`);
}

reviewsToggles.classList.remove(`slider__toggles--nojs`);
reviewsToggles.classList.add(`slider__toggles--js`);


createDotsSlider(changeSlide, reviewsToggles, reviewsList);
createArrowsSlider(leftArrow, `left`, reviewsList);
createArrowsSlider(rightArrow, `right`, reviewsList);

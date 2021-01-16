"use strict";

const reviews = document.querySelector(`.reviews`);
const reviewsList = reviews.querySelector(`.reviews__list`);
const reviewsToggles = reviews.querySelector(`.slider__toggles`);
const reviewsOptions = reviews.querySelector(`.slider__options`);
const leftArrow = reviewsOptions.querySelector(`.slider__arrow--left`);
const rightArrow = reviewsOptions.querySelector(`.slider__arrow--right`);

createDotsSlider(changeSlide, reviewsToggles, reviewsList);
createArrowsSlider(leftArrow, `left`, reviewsList);
createArrowsSlider(rightArrow, `right`, reviewsList);

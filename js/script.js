"use strict";

//FOR YEAR
window.onload = function () {
  const yearEl = document.querySelector(".year");
  const currentYear = new Date().getFullYear();
  yearEl.textContent = currentYear;
};
///////////////////////////////////////////////////////////
// Make mobile navigation work
window.onload = function () {
  const btnNavEl = document.querySelector(".btn-mobile-nav");
  const headerEl = document.querySelector(".navigation");

  btnNavEl.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
  });
};

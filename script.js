"use strict";
const before = document.querySelector(".before-calculate");
const after = document.querySelector(".after-calculate");

const input = 0;
const input2 = 2;

//Button
const zeroButton = document.querySelector(".zero");
const oneButton = document.querySelector(".one");
const twoButton = document.querySelector(".two");
const threeButton = document.querySelector(".three");
const fourButton = document.querySelector(".four");
const fiveButton = document.querySelector(".five");
const sixButton = document.querySelector(".six");
const sevenButton = document.querySelector(".seven");
const eightButton = document.querySelector(".eight");
const nineButton = document.querySelector(".nine");
const plusButton = document.querySelector(".plus");
const minusButton = document.querySelector(".minus");
const mutiplyButton = document.querySelector(".mutiply");
const divideButton = document.querySelector(".divide");
const decimalButton = document.querySelector(".decimal");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const equalButton = document.querySelector(".equal");

oneButton.addEventListener("click", function () {
  before.textContent = 1;
});

twoButton.addEventListener("click", function () {
  return 2;
});

threeButton.addEventListener("click", function () {
  return 3;
});

plusButton.addEventListener("click", function () {
  return "+";
});

function calculateResult() {
  return `${input}${symbol}${input2}`;
}

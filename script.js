"use strict";
let nextBtn = document.querySelector(".next__btn");
let checkBtn = document.querySelector(".check__btn");
let num1 = document.querySelector(".num1");
let num2 = document.querySelector(".num2");
let userInput = document.querySelector(".user__input");
let result = document.querySelector(".result");
let randNum1;
let randNum2;
let randFunc = function () {
  randNum1 = Math.floor(Math.random() * 200 - 99);
  randNum2 = Math.floor(Math.random() * 200 - 99);
  num1.textContent = `${randNum1}`;
  num2.textContent = `${randNum2}`;
};
nextBtn.addEventListener("click", function (e) {
  e.preventDefault();
  nextBtn.textContent = "next";
  randFunc();
});
checkBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (randNum1 + randNum2 === Number(userInput.value)) {
    result.textContent = "Tabriklaymiz tog'ri topdingiz";
    result.style.color = "green";
    // setTimeout(randFunc, 3000);
    randFunc();
  } else {
    result.textContent = "Xato javob";
    result.style.color = "red";
  }
  userInput.value = "";
});

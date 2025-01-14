const num = document.querySelectorAll(".num");
const display = document.getElementById("calculator-input");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");

let currentNum = "";
let nextNum = "";
let operator = "";

equals.addEventListener("click", () => {
  let output = 0;
  currentNum = currentNum.toString().slice(1);
});

num.forEach((item) => {
  item.addEventListener("click", () => {
    if (operators === "") {
      display.value += item.innerHTML;
      currentNum = display.value;
    } else {
      display.value += item.innerHTML;
      nextNum = display.value;
    }
  });
});

operators.forEach((item) => {
  item.addEventListener("click", () => {
    display.value = item.innerHTML;
    operators = display.value;
  });
});

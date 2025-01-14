const num = document.querySelectorAll(".num");
const display = document.getElementById("calculator-input");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");

let currentNum = "";
let nextNum = "";
let operator = "";

function calculation() {
  if (operator !== "") {
    nextNum = display.value.innerHTML;
    console.log(nextNum);
  } else {
    currentNum = display.value.innerHTML;
    console.log(currentNum);
  }
}

equals.addEventListener("click", () => {
  let output = 0;
  currentNum = currentNum.toString().slice(1);
  console.log(currentNum);
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

const num = document.querySelectorAll(".num");
const display = document.getElementById("calculator-input");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");
const toggleBtn = document.querySelector(".toggle");
const decimalBtn = document.querySelector(".decimal");
const percentageBtn = document.querySelector(".percentage");
const deleteBtn = document.querySelector(".delete");

let currentNum = 0;
let nextNum = 0;
let symbol = "";

equals.addEventListener("click", () => {
  let output = 0;
  nextNum = nextNum.toString().slice(1);
  switch (symbol) {
    case "+":
      output = Number(currentNum) + Number(nextNum);
      break;

    case "-":
      output = Number(currentNum) - Number(nextNum);
      break;

    case "*":
      output = Number(currentNum) * Number(nextNum);
      break;

    case "/":
      output = Number(currentNum) / Number(nextNum);
      break;

    default:
      output = Number(currentNum);
  }
  if (!Number.isInteger(output)) {
    output = output.toFixed(2);
  }

  display.value = output;
  currentNum = output;
  symbol = "";
});

num.forEach((item) => {
  item.addEventListener("click", () => {
    if (symbol === "") {
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
    symbol = display.value;
  });
});

clearBtn.addEventListener("click", () => {
  display.value = "";
  currentNum = 0;
  nextNum = 0;
  symbol = "";
});

toggleBtn.addEventListener("click", () => {
  if (symbol === "") {
    display.value = -1 * display.value;
  }
});

decimalBtn.addEventListener("click", () => {
  if (!display.value.includes(".")) {
    display.value += ".";
  }
});

percentageBtn.addEventListener("click", () => {
  display.value = Number(currentNum) / 100;
  currentNum = display.value;
});

deleteBtn.addEventListener("click", () => {
  if (
    display.value === "NaN" ||
    display.value === "Infinity" ||
    display.value === "-Infinity"
  ) {
    display.value = "";
  }

  display.value = display.value
    .toString()
    .substring(0, display.value.length - 1);
});

const calc = document.querySelector(".calc-container");
const display = document.querySelector(".display");
const clear = document.querySelector("#clear");
let content = "0";

let nums = "0123456789";

let leftOperand = "";
let rightOperand = "";

let operator = "";
const methods = "+-/*";
const method = {
  "*": (left, right) => left * right,
  "/": (left, right) => left / right,
  "+": (left, right) => left + right,
  "-": (left, right) => left - right,
};

const operators = ["-", "+", "/", "*"];

function calculator(arr) {}

calc.addEventListener("click", (event) => {
  const target = event.target;
  if (nums.includes(target.textContent)) {
    if (content === "0") {
      if (clear.textContent === "AC") {
        clear.textContent = "C";
      }
      content = target.textContent;
      display.textContent = content;
    } else if (display.textContent.length === 16) {
      return;
    } else {
      if (clear.textContent === "AC") {
        clear.textContent = "C";
      }
      content += target.textContent;
      display.textContent = content;
      console.log(content);
    }
  } else if (target.id === "backspace") {
    if (display.textContent.length === 1) {
      content = "0";
      display.textContent = "0";
    } else {
      console.log(content);
      split = display.textContent.split("");
      split.splice(display.textContent.length - 1, 1);
      content = split.join("");
      display.textContent = content;
      console.log(content);
    }
  } else if (target.id === "decimal") {
    if (content === "0") {
      content = "0.";
      display.textContent = "0.";
    } else if (!content.includes(".")) {
      content += ".";
      display.textContent = content;
    }
  } else if (target.id === "clear") {
    content = "0";
    display.textContent = "0";
    clear.textContent = "AC";
  } else if (methods.includes(target.id)) {
    leftOperand = content;
    content = "0";
    operator = target.id;
  } else if (target.id === "=") {
    content = method[operator](+leftOperand, +content);
    display.textContent = content;
    clear.textContent = "AC";
  } else if (target.id === "%") {
    display.textContent = +display.textContent / 100;
  }
});

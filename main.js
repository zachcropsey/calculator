let numOne = "0";
let operator = "";
let numTwo = "0";

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}

function operate(numOne, operator, numTwo) {
  if (operator === "+") {
    return add(numOne, numTwo);
  } else if (operator === "-") {
    return subtract(numOne, numTwo);
  } else if (operator === "*") {
    return multiply(numOne, numTwo);
  } else if (operator === "/") {
    return divide(numOne, numTwo);
  } else {
    return "Error";
  }
}

const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");
const equals = document.getElementById("equals");
const operators = ["+", "-", "*", "/"];

document.getElementById("clear").addEventListener("click", () => {
  numOne = "0";
  operator = "";
  numTwo = "0";
  display.textContent = "0";
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (isNaN(Number(value))) {
      if (operators.includes(value)) {
        if (numTwo !== "0") {
          const result = operate(Number(numOne), operator, Number(numTwo));
          display.textContent = result;
          numOne = result.toString();
          numTwo = "0";
        }
        operator = value;
        console.log("Operator: " + operator);
        display.textContent = operator;
      }
    } else {
      if (operator === "") {
        numOne = numOne === "0" ? value : numOne + value;
        display.textContent = numOne;
        console.log("numOne: " + numOne);
      } else {
        numTwo = numTwo === "0" ? value : numTwo + value;
        display.textContent = numTwo;
        console.log("numTwo: " + numTwo);
      }
    }
  });
});

equals.addEventListener("click", () => {
  const result = operate(Number(numOne), operator, Number(numTwo));

  if (result === "Cannot divide by zero") {
    display.textContent = result;
    numOne = "0";
    numTwo = "0";
    operator = "";
  } else {
    display.textContent = result;
    console.log("Result: " + result);

    numOne = result.toString();

    numTwo = "0";
    operator = "";
  }
});

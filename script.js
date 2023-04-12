// Operation Variables
let firstNumber = '';
let secondNumber = '';
let operator = '';

// Document selectors
const numberButtons = document.querySelectorAll('.number-btn');
const operationButtons = document.querySelectorAll('.oper-btn');
const displayButtons = document.querySelectorAll('.display-btn');
const displayCurrent = document.querySelector('.current-number');
const displayOperation = document.querySelector('.operation');

// Math operation functions
const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const multiply = function(a, b) {
  return a * b;
};

const divide = function(a, b) {
  return a / b;
};

// Operate function 
const operate = function(firstNumber, secondNumber) {
  switch (operator) {
    case '+':
      add(firstNumber, secondNumber);
      break;
    case '-':
      subtract(firstNumber, secondNumber);
      break;
    case 'X':
      multiply(firstNumber, secondNumber);
      break;
    case '÷':
      divide(firstNumber, secondNumber);
  }
}

// Function for when clicking number
const writeNumber = function(e) {
  displayCurrent.textContent += e.target.textContent
}

// Listeners // 
// Listens to the number buttons
numberButtons.forEach(numberButton => {
  numberButton.addEventListener('click', writeNumber)
})

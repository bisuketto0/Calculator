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
  firstNumber = parseInt(firstNumber);
  secondNumber = parseInt(secondNumber);
  switch (operator) {
    case '+':
      return add(firstNumber, secondNumber);
      break;
    case '-':
      return subtract(firstNumber, secondNumber);
      break;
    case 'X':
      return multiply(firstNumber, secondNumber);
      break;
    case '÷':
      return divide(firstNumber, secondNumber);
  }
};

// Function for when clicking number
const writeNumber = function(e) {
  displayCurrent.textContent += e.target.textContent;
};

// Function for when clicking operator
const selectOperator = function(e) {
  if (firstNumber) {
    if (displayCurrent.textContent) {
      secondNumber = displayCurrent.textContent;
      displayCurrent.textContent = '';
      firstNumber = operate(firstNumber, secondNumber);
      secondNumber = '';
      displayCurrent.textContent = '';
      operator = e.target.textContent;
    } else if (!displayCurrent.textContent) {
      operator = e.target.textContent;
    }
  } else if (!firstNumber) {
    if (displayCurrent.textContent) {
      firstNumber = displayCurrent.textContent;
      displayCurrent.textContent = '';
      operator = e.target.textContent;
    }
  }
  displayOperation.textContent = `${firstNumber} ${operator} ${secondNumber}`;
};


// Listeners // 
// Listens to the number buttons
numberButtons.forEach(numberButton => {
  numberButton.addEventListener('click', writeNumber);
});

operationButtons.forEach(operationButton => {
  operationButton.addEventListener('click', selectOperator);
});

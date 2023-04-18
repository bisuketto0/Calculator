// Operation Variables
let firstNumber = '';
let secondNumber = '';
let operator = '';
let shouldResetCurrent = false;

// Document selectors
const numberButtons = document.querySelectorAll('.number-btn');
const operationButtons = document.querySelectorAll('.oper-btn');
const displayButtons = document.querySelectorAll('.display-btn');
const displayCurrent = document.querySelector('.current-number');
const displayOperation = document.querySelector('.operation');

// Function for when clicking number
const writeNumber = function(e) {
  if (shouldResetCurrent) resetCurrent()
  displayCurrent.textContent += e.target.textContent;
  shouldResetCurrent = false;
  // Deselect button
  operationButtons.forEach(button => button.classList.remove('selected'));
};

// Function for when clicking operator
const selectOperator = function(e) {
  // If there is a first number evaluate
  if (firstNumber) evaluate();
  // But if there isn't a first number assign first number  
  firstNumber = displayCurrent.textContent;
  displayCurrent.textContent = firstNumber;
  operator = e.target.textContent;
  shouldResetCurrent = true;
  selectButton(e.target);
};

const evaluate = function() {
  if (shouldResetCurrent) return;
  secondNumber = displayCurrent.textContent;
  firstNumber = operate(firstNumber, secondNumber);
  displayCurrent.textContent = firstNumber;
  secondNumber = '';
};

// Reset current number
const resetCurrent = function() {
  displayCurrent.textContent = ''
  shouldResetCurrent = false
}

// Select the button
const selectButton = function(thisButton) {
  operationButtons.forEach(button => button.classList.remove('selected'))
  thisButton.classList.add('selected')
}

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
    case '-':
      return subtract(firstNumber, secondNumber);
    case 'X':
      return multiply(firstNumber, secondNumber);
    case '÷':
      return divide(firstNumber, secondNumber);
  }
};

// Listeners // 
// Listens to the number buttons
numberButtons.forEach(numberButton => {
  numberButton.addEventListener('click', writeNumber);
});

// Listens to the operation buttons
operationButtons.forEach(operationButton => {
  operationButton.addEventListener('click', selectOperator);
});

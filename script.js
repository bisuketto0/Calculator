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
const equalButton = document.querySelector('.equal');
const clearBtn = document.querySelector('#clear');
const deleteBtn = document.querySelector('#delete');

// Function for when clicking number
const writeNumber = function(e) {
  if (shouldResetCurrent || displayCurrent.textContent === '0') resetCurrent()
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
  operator = e.target.textContent;
  shouldResetCurrent = true;
  selectButton(e.target);
};

// Do the operation
const evaluate = function(e) {
  if (shouldResetCurrent) return;
  secondNumber = displayCurrent.textContent;
  displayCurrent.textContent = operate(firstNumber, secondNumber);
  secondNumber = '';
  shouldResetCurrent = true;
};

// Reset current number display
const resetCurrent = function() {
  displayCurrent.textContent = ''
  shouldResetCurrent = false
}

// Select the button
const selectButton = function(thisButton) {
  operationButtons.forEach(button => button.classList.remove('selected'))
  thisButton.classList.add('selected')
}

// Clear operations
const clear = function() {
  firstNumber = '';
  secondNumber = '';
  operator = '';
  shouldResetCurrent = false
  displayCurrent.textContent = '0'
};

// Delete number
const del = function() {
  let string = displayCurrent.textContent
  displayCurrent.textContent = string.slice(0, string.length - 1)
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

numberButtons.forEach(numberButton => {
  numberButton.addEventListener('click', writeNumber);
});

operationButtons.forEach(operationButton => {
  operationButton.addEventListener('click', selectOperator);
});

equalButton.addEventListener('click', evaluate);

clearBtn.addEventListener('click', clear);

deleteBtn.addEventListener('click', del);
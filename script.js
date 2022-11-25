let calcDisplay = document.querySelector('#calc-display');
const numBtns = document.querySelectorAll('.num-button');
const clearBtn = document.querySelector('#clear-button');
const divideBtn = document.querySelector('#divide-button');
const multiplyBtn = document.querySelector('#multiply-button');
const subtractBtn = document.querySelector('#subtract-button');
const addBtn = document.querySelector('#add-button');
const decimalBtn = document.querySelector('#decimal-button');
const equalsBtn = document.querySelector('#equals-button');
const operatorBtns = document.querySelectorAll('.operation-button');

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
    return a / b;
}

function operate(a, b, operator) {
    switch(operator) {
        case '+':
            console.log('adding');
            return add(a, b);
        case '-':
            console.log('subtracting');
            return subtract(a, b);
        case '×':
            console.log('multiplying');
            return multiply(a, b);
        case '÷':
            console.log('dividing');
            return divide(a, b);      
    }
}

function appendNum(input) {
    if (!(input.target === clearBtn || input.target === equalsBtn)) {
        currentNum += input.target.textContent;
        calcDisplay.textContent = currentNum;
    }
}

function clear() {
    currentNum = '';
    calcDisplay.textContent = '0';
    firstOperand = 0;
    secondOperand = 0;
    currentOperator = '';
}

function setOperator(operator) {
    firstOperand = currentNum;
    currentOperator = operator.target.textContent;
    console.log(`firstOperand: ${firstOperand}`);
    console.log(`currentOperator: ${currentOperator}`);
    currentNum = '';
}

function evaluate() {   
    secondOperand = currentNum;
    console.log(`secondOperand: ${secondOperand}`);
    currentAnswer = operate(firstOperand, secondOperand, currentOperator);
    console.log(currentAnswer);
    calcDisplay.textContent = currentAnswer;
}

numBtns.forEach((btn) => {
    btn.addEventListener('click', appendNum);
});

clearBtn.addEventListener('click', clear);

operatorBtns.forEach((btn) => {
    btn.addEventListener('click', setOperator);
});

equalsBtn.addEventListener('click', evaluate);

let currentNum = '';
let firstOperand = 0;
let secondOperand = 0;
let currentOperator = '';
let currentAnswer = 0;
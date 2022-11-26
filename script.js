let calcDisplay = document.querySelector('#calc-display');
const numBtns = document.querySelectorAll('.num-button');
const clearBtn = document.querySelector('#clear-button');
const divideBtn = document.querySelector('#divide-button');
const multiplyBtn = document.querySelector('#multiply-button');
const subtractBtn = document.querySelector('#subtract-button');
const addBtn = document.querySelector('#add-button');
const decimalBtn = document.querySelector('#decimal-button');
const equalsBtn = document.querySelector('#equals-button');
const operationBtns = document.querySelectorAll('.operation-button');
const deleteBtn = document.querySelector('#delete-button');

function add(a, b) {
    return (Number(a) + Number(b));
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

function clearAll() {
    currentOperand = '';
    previousOperand = '';
    currentOperation = '';
    calcDisplay.textContent = 0;
}

function evaluate() {
    if (previousOperand === '' || currentOperand === '') return;
    let result = operate(previousOperand, currentOperand, currentOperation);
    result = parseFloat(result.toFixed(4));
    calcDisplay.textContent = result;
    console.log(`Result: ${result}`);
    return result;
}

function appendNum(num) {
    if (num.target.textContent === '.' && currentOperand.includes('.')) return;
    currentOperand += num.target.textContent;
}

function displayNum() {
    calcDisplay.textContent = currentOperand;
}

function setOperation(operator) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        currentOperand = evaluate();
    }
    previousOperand = currentOperand;
    currentOperand = '';
    currentOperation = operator.target.textContent;
}

function deleteLast() {
    currentOperand = currentOperand.slice(0, -1);
};

numBtns.forEach(btn => {
    btn.addEventListener('click', appendNum);
    btn.addEventListener('click', displayNum);
});

operationBtns.forEach(btn => {
    btn.addEventListener('click', setOperation);
})

equalsBtn.addEventListener('click', evaluate);

clearBtn.addEventListener('click', clearAll);

decimalBtn.addEventListener('click', (e) => {
    appendNum(e);
    displayNum();
});

deleteBtn.addEventListener('click', () => {
    deleteLast();
    displayNum();
});

let currentOperand = '';
let previousOperand = '';
let currentOperation = '';
/* 
    Pegar elementos do html
*/

const buttons = document.querySelectorAll('.calc-number');
const operators = document.querySelectorAll('.calc-operator');
const resultButton = document.querySelector('#calc-result');
const display = document.querySelector('#display');
const operatorDisplay = document.querySelector('#operator-display');

let operatorValue;
let values = [];
let firstValue;
let secondValue;

buttons.forEach((button) => {
    button.onclick = () => {
        values.push(button.innerText);
        display.value+= button.innerText;
    };
});

operators.forEach((operator) => {
    operator.onclick = () => {
        firstValue = parseInt(values.reduce((value1, value2) => value1 + value2));
        operatorValue = operator.innerText;
        values = [];
        operatorDisplay.value = operatorValue;
        changeDisplayValue('');
    };
});

resultButton.onclick = () => {
    secondValue = parseInt(values.reduce((value1, value2) => value1 + value2));
    const result = getResult(operatorValue);
    changeDisplayValue(result);
};

function getResult (operator) {
    let finalValue;

    if (operator === '+') {
        finalValue = firstValue + secondValue;
    } else if (operator === '-') {
        finalValue = firstValue - secondValue;
    } else if (operator === '/') {
        finalValue = Math.round(firstValue / secondValue);
    } else if (operator === 'x') {
        finalValue = firstValue * secondValue;
    }

    return finalValue;
};

function changeDisplayValue (displayValue) {
    display.value = displayValue;
};
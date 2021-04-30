/* 
    Pegar elementos do html
    e iniciar variáveis
*/

const buttons = document.querySelectorAll('.calc-number');
const operators = document.querySelectorAll('.calc-operator');
const resultButton = document.querySelector('#calc-result');
const display = document.querySelector('#display');
const operatorDisplay = document.querySelector('#operator-display');

let operatorValue ='';
let values = [];
let firstValue = 0;
let secondValue = 0;

/* 
    Para cada botão de valor
    adicionar valores ao array de valores
    e mudar o valor do display
*/
buttons.forEach((button) => {
    button.onclick = () => {
        values.push(button.innerText);
        display.value+= button.innerText;
    };
});

/* 
    Ao clicar em um botão de operador 
    limpar o array e realizar a soma dos 
    primeiros valores digitados
*/
operators.forEach((operator) => {
    operator.onclick = () => {
        firstValue = parseInt(values.reduce((value1, value2) => value1 + value2));
        operatorValue = operator.innerText;
        values = [];
        operatorDisplay.value = operatorValue;
        changeDisplayValue('');
    };
});

/* 
    Ao clicar no botão de resultado iterar
    os valores do segundo valor, obter o 
    resultado e apresentar no display
*/
resultButton.onclick = () => {
    secondValue = parseInt(values.reduce((value1, value2) => value1 + value2))
    const result = getResult(operatorValue);
    firstValue = result;
    changeDisplayValue(result);
};

/* 
    Função que verifica o operador
    e realiza as operações 
*/
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


/* 
    Função para atualizar o valor do display
*/
function changeDisplayValue (displayValue) {
    display.value = displayValue;
};
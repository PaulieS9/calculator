let container = document.querySelector('#container');

for (i = 0; i < 4; ++i) {
    const row = document.createElement('div');
    row.classList.add('row');
    container.append(row);
    for (j = 0; j < 4; ++j) {
        const button = document.createElement('div');
        if ((j === 3 || (j === 0 && i === 3) || (j === 2 && i === 3))) {
            button.classList.add('function');
        }
        else {
            button.classList.add('number');
        }
        row.appendChild(button);
    }
}

let input1 = []
let operator = ''
let input2 = []

function acceptInput(value) {
    if (['+', '-', 'x', '/', '9'].includes(value)) {
        operator = value;
        console.log(operator);
    }
    else if (operator.length === 0) {
        input1.push(value);
    }
    else if (operator.length === 1) {
        input2.push(value);
    }
}

const numberButtons = document.getElementsByClassName('number');

for (let n = 0; n < numberButtons.length - 1; n++) {
    numberButtons[n].textContent = n + 1;
    numberButtons[n].addEventListener('click', () => acceptInput(numberButtons[n].textContent));
}
numberButtons[9].textContent = 0
numberButtons[9].addEventListener('click', () => acceptInput(numberButtons[9].textContent));

const functions = document.getElementsByClassName('function');

for (let f = 0; f < functions.length - 3; f++) {
    const functionValues = ['+','-','x']
    functions[f].textContent = functionValues[f];
    functions[f].addEventListener('click', () => acceptInput(functions[f].textContent));
}

functions[3].textContent = 'C';

function solve(num1, num2, symbol) {
    parseInt(input1.join(''));
    parseInt(input2.join(''));
    if (symbol === '+') {
        return (add(num1, num2))
    }
    else if (symbol === '-') {
        return subtract(num1, num2)
    }
    else if (symbol === 'x') {
        return multiply(num1, num2)
    }
    else if (symbol === '/') {
        return divide(num1, num2)
    }
}

functions[4].textContent = '=';
functions[4].addEventListener('click', () => solve(input1, input2, operator));


functions[5].textContent = '/';
functions[5].addEventListener('click', () => acceptInput(functions[5].textContent));

function add(num1, num2) {
    return (Number(num1) + Number(num2))
}

function subtract(num1, num2) {
    return (num1 - num2)
}

function multiply(num1, num2) {
    return (num1 * num2)
}

function divide(num1, num2) {
    return (num1 / num2)
}

function hi() {
    console.log('hi')
}



//Accept input as string then convert to operate







 






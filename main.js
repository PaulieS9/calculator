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
const numberButtons = document.getElementsByClassName('number');

for (n = 0; n < numberButtons.length - 1; n++) {
    numberButtons[n].textContent = n + 1;
}
numberButtons[9].textContent = 0

const functions = document.getElementsByClassName('function');

for (f = 0; f < functions.length; f++) {
    const functionValues = ['+','-','x','C','=','/']
    functions[f].textContent = functionValues[f];
}

const display = { num: null };





numberButtons
 






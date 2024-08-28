let container = document.querySelector('#container');

for (i = 0; i < 4; ++i) {
    const row = document.createElement('div');
    row.classList.add('row');
    container.append(row);
    for (j = 0; j < 4; ++j) {
        const button = document.createElement('div');
        if ((j === 3 || (j === 0 && i === 3) || (j === 2 && i === 3))) {
            button.classList.add('operator');
        }
        else {
            button.classList.add('button');
        }
        row.appendChild(button);
    }
}



const numbers = document.querySelectorAll('.number');
const sonuc = document.getElementById('sonuc');
const operators = document.querySelectorAll('.operator')
const equals = document.querySelector('.highlights')
const clearAll = document.querySelector('.clearAll')
const clear = document.querySelector('.clear')
var currentNumber = '';
var oldNumber = '';
var operator = 0;
var opefirst = [];
var curretSonuc = 0;

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        currentNumber += number.textContent;
        sonuc.innerText = currentNumber;
    });
});

clearAll.addEventListener('click', () => {
    sonuc.innerText = '';
    currentNumber = '';
    oldNumber = '';
    operator = 0;
    opefirst = [];
    curretSonuc = 0;
});
clear.addEventListener('click', () => {
    sonuc.innerText = '';
    currentNumber = '';
});
operators.forEach((op) => {
    op.addEventListener('click', () => {
        opefirst.push(op.textContent);
        if (oldNumber === '') {
            oldNumber = currentNumber;
            currentNumber = '';

        }
        if (currentNumber !== '') {
            oldNumber = parseFloat(oldNumber);
            currentNumber = parseFloat(currentNumber);
            console.log(oldNumber)
            console.log(currentNumber)

            switch (op.textContent) {
                case '+':
                    curretSonuc = oldNumber + currentNumber;
                    sonuc.innerText = curretSonuc;

                    break;
                case '-':
                    curretSonuc = oldNumber - currentNumber;
                    sonuc.innerText = curretSonuc;
                    break;
                case 'x':
                    curretSonuc = oldNumber * currentNumber;
                    sonuc.innerText = curretSonuc;
                    break;
                case '/':
                    curretSonuc = oldNumber / currentNumber;
                    sonuc.innerText = curretSonuc;
                    break;
                case '%':
                    curretSonuc = oldNumber % currentNumber;
                    sonuc.innerText = curretSonuc;
                    break;
            }
            currentNumber = '';
            oldNumber = curretSonuc;



        }

        equals.addEventListener('click', () => {
            oldNumber = parseFloat(oldNumber);
            currentNumber = parseFloat(currentNumber);
            switch (opefirst.pop()) {

                case '+':
                    curretSonuc = oldNumber + currentNumber;
                    sonuc.innerText = curretSonuc;

                    break;
                case '-':
                    curretSonuc = oldNumber - currentNumber;
                    sonuc.innerText = curretSonuc;
                    break;
                case 'x':
                    curretSonuc = oldNumber * currentNumber;
                    sonuc.innerText = curretSonuc;
                    break;
                case '/':
                    curretSonuc = oldNumber / currentNumber;
                    sonuc.innerText = curretSonuc;
                    break;
                case '%':
                    curretSonuc = oldNumber % currentNumber;
                    sonuc.innerText = curretSonuc;
                    break;

            }
            currentNumber = '';
            oldNumber = curretSonuc;
        })

    });

});
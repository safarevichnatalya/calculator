let firstNumber = '';
let secondNumber = '';
let operator = '';
let firstOperatror = '';

let opperatorsArray = ['+', '/', 'x', '-'];
let specialOperators = ['-/+'];

let numbersArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];


let result = false;

let key = document.querySelector('.calculator__list');
let input = document.querySelector('p');

// обнуление
function clear() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    result = false;
    input.textContent = '0';
}

key.addEventListener('click', function (e) {


    // очистка поля АС
    if (e.target.dataset.operator == 'clear') {
        clear();
    };

    const currentNumber = e.target.dataset.number;
    const currentOperator = e.target.dataset.operator;
    const currentValue = e.target.dataset.precent;

    // % && -/+
    if (currentValue) {
        firstNumber = firstNumber / 100;
        input.textContent = parseFloat(firstNumber);
    }
    if (specialOperators.includes(currentValue)) {
        firstNumber = firstNumber * -1;
        input.textContent = firstNumber;
    }

    // нажатия по цифрам
    if (numbersArray.includes(currentNumber)) {
        // если 2 число = '' и опрератор
        if (secondNumber == '' && operator == '') {
            firstNumber += currentNumber;
            input.textContent = firstNumber;
        }
        // записываем значение 2 значения
        else if (firstNumber !== '' && operator !== "" && result) {
            secondNumber = currentNumber;
            result = false;
            input.textContent = secondNumber
        }
        else {
            secondNumber += currentNumber;
            input.textContent = secondNumber;
        }
    }

    // операторы 
    if (opperatorsArray.includes(currentOperator)) {

        operator = currentOperator;
        // если 2 значения нет
        if (secondNumber === '') {
            firstOperatror = currentOperator;
            input.textContent = firstNumber;
        }
        // если имеются 2 значения
        if (firstNumber !== '' && secondNumber !== '') {
            switch (firstOperatror) {
                case '+':
                    firstNumber = +(firstNumber) + +(secondNumber);
                    break;
                case '-':
                    firstNumber = +firstNumber - +secondNumber;
                    break;
                case 'x':
                    firstNumber = +firstNumber * +secondNumber;
                    break;

                case '/':
                    if (secondNumber == '0') {
                        firstNumber = " ";
                        secondNumber = " ";
                        operator = " ";
                        return;
                    }
                    firstNumber = firstNumber / secondNumber;
                    break;
            }
            input.textContent = firstNumber;
            firstOperatror = currentOperator;
            secondNumber = '';
            result = true;

        }
    }
    // равно
    if (e.target.dataset.result) {

        switch (operator) {
            case '+':
                firstNumber = +(firstNumber) + +(secondNumber);
                break;
            case '-':
                firstNumber = firstNumber - secondNumber;
                break;
            case 'x':
                firstNumber = firstNumber * secondNumber;
                break;
            case '/':
                if (secondNumber == '0') {
                    firstNumber = " ";
                    secondNumber = " ";
                    operator = " ";
                    return;
                }
                firstNumber = firstNumber / secondNumber;
                break;
        }

        input.textContent = firstNumber;
        result = true;
    }

});







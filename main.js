
let firstDigit = '';
let currOperator;
let secondDigit = '';
let result;
let operated = false;

function add (a, b) {
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

function operate(callback, a, b) {
    result += callback(a, b);
    return display(result);
}

function display(output) {
    const display = document.querySelector('.display');
    display.textContent = output;
}

function clickDigits(num) { //1+2+3
    if(!operated) { //operated = false
        firstDigit += num; //firstDigit = 1
        display(firstDigit);
    } else {
        secondDigit += num; //operated = true, secondDigit = 2
        display(secondDigit);
    }

}

function operator(input) {
    if(input === '/') {
        if(!operated) {
            currOperator = divide; //divide
            operated = true; //true
        } else {
            firstDigit = '';
            secondDigit = '';
            operated = false;
        }

    }
    else if(input === 'X') {
        currOperator = multiply;
        operated = true;
    }
    else if(input === '-') {
        currOperator = subtract;
        operated = true;
    }
    else if(input === '+') {
        currOperator = add;
        operated = true;
    }
    else if(input === '=') {
        operate(currOperator, Number(firstDigit), Number(secondDigit));
    }
}
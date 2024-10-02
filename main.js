let firstNumber;
let secondNumber;
let operation;
let result = 0;
let step =  0;

let numArray = [];
let secondArr = [];

let display = document.getElementById('display');

function displayData(num) {
    if(step === 0 || step === 1) {
        numArray.push(num);
        step = 1;
        firstNumber = Number(numArray.join(''));
        display.value = firstNumber;
    } else if(step === 2) {
        secondArr.push(num);
        secondNumber = Number(secondArr.join(''));
        display.value = secondNumber;
    }
}
function getOperator(key) {
    step = 2;
    operation = key;
}
function clearDisplay() {
    display.value = ''
    firstNumber = null;
    secondNumber = null;
    operation = null;
    result = 0;
    step =  0;
    numArray = [];
    secondArr = [];
}

const calCulaQual =()=> {
    if(operation === '+') {
       result = firstNumber + secondNumber
       display.value = result;
    } else if(operation === '-') {
       result = firstNumber - secondNumber
       display.value = result;
    }
     else if(operation === '*') {
       result = firstNumber * secondNumber
       display.value = result;
    }
     else if(operation === '/') {
       result = firstNumber - secondNumber
       display.value = result;
    }
}
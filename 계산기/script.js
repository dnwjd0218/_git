const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display_result');
const operatorBtns = document.querySelectorAll('.operator');
const functionBtns = document.querySelectorAll('.function');
const decimalBtn = document.querySelector('.decimal');
const resultBtn = document.querySelector('.result');

let leftNumber = '0'
let rightNumber = '0' 
let currentOperator = null
let operatorclick = false

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        const buttonText = button.textContent;

        if (button.classList.contains('number') || button.classList.contains('zero')) {
            if (display.textContent === '0' || operatorclick) {
                display.textContent = buttonText
                operatorclick = false;
            } else {
                display.textContent += buttonText
            }
        }
        console.log(Number(display.textContent));
    });
});

operatorBtns.forEach(function(button) {
    button.addEventListener('click', function() {
        currentOperator = button.textContent
        if (leftNumber === '0') {
            leftNumber = display.textContent

        } else {
            rightNumber = display.textContent
            leftNumber = calculate()
            display.textContent = leftNumber
        }

        operatorclick = true
        console.log('Left Number:', leftNumber)
        console.log('Operator:', currentOperator)
    });
});
const numberinput = (number) => {
    if (currentOperator) {
        rightNumber += number
    } else {
        leftNumber += number
    }
}
const operinput = (operator) => {
    if (operator && rightNumber !== '0') {
        const currentResult = calculate()
        rightNumber = '0'
        leftNumber = currentResult
        currentOperator = operator
    } else {
        currentOperator = operator
    }
}
const calculate = () => {
    let result;
    const left = leftNumber 
    const right = rightNumber

    if (currentOperator === '+') {
        result = left + right
    } else if (currentOperator === '-') {
        result = left - right
    } else if (currentOperator === '*') {
        result = left * right
    } else if (currentOperator === '/') {
        result = left / right
    } 

    return result.toString()
}

functionBtns.forEach(function(button) {
    button.addEventListener('click', function() {
        if (button.textContent === 'AC') {
            leftNumber = '0'
            rightNumber = '0'
            currentOperator = null
            display.textContent = '0'
        
        }
    })
})
resultBtn.addEventListener('click', function() {
    if (currentOperator !== null) {
        rightNumber = display.textContent
        const result = calculate()
        display.textContent = result
        leftNumber = result
        rightNumber = '0'
    }
});
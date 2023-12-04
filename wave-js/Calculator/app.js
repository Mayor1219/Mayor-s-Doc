function clearInput() {
    let = document.getElementById('input').value = '';


}

function Backspace() {
    let input = document.getElementById('input');
    input.value = input.value.slice(0, -1);
}

function appendInput(value) {
    document.getElementById('input').value += value;
}

function calculate() {
    let input = document.getElementById('input');
    try {
        result = eval(input.value);
        input.value = result;
    } catch (error) {
        input.value = "Syntax Error";
    }
}

function calculatePercentage() {
    let value = input.value;
    let operators = ['+', '-', '*', '/'];
    let operatorIndex = -1;
    for (let i = 0; i < operators.length; i++) {
        if (value.lastIndexOf(operators[i]) > operatorIndex) {
            operatorIndex = value.lastIndexOf(operators[i]);
        }
    }

    if (operatorIndex !== -1) {
        let number = value.slice(operatorIndex + 1);
        let percentage = parseFloat(number) / 100;
        let newValue = value.slice(0, operatorIndex + 1) + percentage;
        input.value = eval(newValue);
    } else {
        let percentage = parseFloat(value) / 100;
        input.value = percentage;
    }
}
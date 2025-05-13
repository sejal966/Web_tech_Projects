let currentInput = "";

function appendNumber(number) {
    currentInput += number;
    document.getElementById('result').value = currentInput;
}

function appendOperator(operator) {
    currentInput += operator;
    document.getElementById('result').value = currentInput;
}

function clearResult() {
    currentInput = "";
    document.getElementById('result').value = currentInput;
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById('result').value = currentInput;
    } catch (e) {
        document.getElementById('result').value = "Error";
        currentInput = "";
    }
}

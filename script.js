let displayValue = "";

function appendNumber(number) {
  displayValue += number;
  updateDisplay();
}

function appendOperation(operation) {
  displayValue += " " + operation + " ";
  updateDisplay();
}

function calculateResult() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = "Error";
    updateDisplay();
  }
}

function clearDisplay() {
  displayValue = "";
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").value = displayValue;
}

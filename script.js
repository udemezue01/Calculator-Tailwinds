let displayElement = document.getElementById('display');
let currentDisplay = '';

function appendDisplay(value) {
  if (currentDisplay === '0') {
    currentDisplay = ''; // Replace '0' with the next value.
  }
  currentDisplay += value;
  displayElement.textContent = currentDisplay;
}

function clearDisplay() {
  currentDisplay = '0';
  displayElement.textContent = currentDisplay;
}

function deleteLast() {
  if (currentDisplay.length > 1) {
    currentDisplay = currentDisplay.slice(0, -1);
  } else {
    currentDisplay = '0';
  }
  displayElement.textContent = currentDisplay;
}

function calculateResult() {
  try {
    currentDisplay = eval(currentDisplay).toString();
  } catch (error) {
    currentDisplay = 'Error';
  }
  displayElement.textContent = currentDisplay;
}

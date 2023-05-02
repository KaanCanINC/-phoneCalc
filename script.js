const buttons = document.querySelectorAll('.item');
const total = document.querySelector('.total');

let prevValue = '';
let operator = '';
let currentValue = '';
let shouldReset = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.textContent;
    
    if (buttonValue === 'C') {
      prevValue = '';
      operator = '';
      currentValue = '';
      shouldReset = false;
      updateDisplay();
    } else if (buttonValue === '+/-') {
      currentValue = -1 * parseFloat(currentValue);
      updateDisplay();
    } else if (buttonValue === '%') {
      currentValue = parseFloat(currentValue) / 100;
      updateDisplay();
    } else if (buttonValue === '÷' || buttonValue === '×' || buttonValue === '−' || buttonValue === '+') {
      prevValue = parseFloat(currentValue);
      operator = buttonValue;
      currentValue = '';
      shouldReset = false;
      updateDisplay();
    } else if (buttonValue === '=') {
      if (operator === '÷') {
        currentValue = prevValue / parseFloat(currentValue);
      } else if (operator === '×') {
        currentValue = prevValue * parseFloat(currentValue);
      } else if (operator === '−') {
        currentValue = prevValue - parseFloat(currentValue);
      } else if (operator === '+') {
        currentValue = prevValue + parseFloat(currentValue);
      }
      prevValue = '';
      operator = '';
      shouldReset = true;
      updateDisplay();
    } else {
      if (shouldReset) {
        currentValue = '';
        shouldReset = false;
      }
      currentValue += buttonValue;
      updateDisplay();
    }
  });
});

function updateDisplay() {
  total.textContent = parseFloat(currentValue) || 0;
}

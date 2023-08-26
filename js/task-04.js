const counterValue = 0; 
const valueElement = document.querySelector('#value');
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

valueElement.textContent = counterValue;

incrementButton.addEventListener('click', () => {
  valueElement.textContent = counterValue + 1;
});

decrementButton.addEventListener('click', () => {
  valueElement.textContent = counterValue - 1;
});
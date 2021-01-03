'use strict'

const counterValue = document.querySelector('#value');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

const increment = () => {
    counterValue.textContent = Number(counterValue.textContent) + 1;
}
incrementBtn.addEventListener('click', increment);

const decrement = () => {
    counterValue.textContent = Number(counterValue.textContent) - 1;
}
decrementBtn.addEventListener('click', decrement);



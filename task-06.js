'use strict'

const inputRef = document.querySelector('input[data-length="6"]');
const inputLength = inputRef.dataset.length;
console.log(inputLength);

const inputValidation = (event) => {
    console.log(event.target.value);
    if (event.target.value.length === Number(inputLength)) {
        inputRef.classList.add('valid');
        // inputRef.style.borderColor = '#4caf50';
    } else {
        inputRef.classList.add('invalid');
        // inputRef.style.borderColor = '#f44336';
    }
}

inputRef.addEventListener('change', inputValidation);

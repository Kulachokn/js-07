'use strict'

const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

const changeName = (event) => {
    if (event.target.value.length > 0) {
        outputRef.textContent = event.target.value;
        return;
    }
    outputRef.textContent = 'незнакомец';
};

inputRef.addEventListener('click', changeName);

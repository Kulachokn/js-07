'use strict'

const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const changeSize = (event) => {
    textRef.style.fontSize = `${event.target.value}px`;
}

inputRef.addEventListener('input', changeSize);

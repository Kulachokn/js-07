'use strict';

const renderBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
const inputRef = document.querySelector('#controls>input');
const boxesRef = document.querySelector('#boxes');

const getRandomColor = (max) => {
    const red = Math.floor(Math.random() * Math.floor(max));
    const blue = Math.floor(Math.random() * Math.floor(max));
    const green = Math.floor(Math.random() * Math.floor(max));
    return [red, green, blue];
}

const createBoxes = (amount) => {
    console.log(amount);

    let squareWidth = 30;
    let squareHeight = 30;
    const squares = [];

    for (let i = 0; i < amount; i += 1) {
        const square = document.createElement('p');

        square.style.width = `${squareWidth}px`;
        square.style.height = `${squareHeight}px`;

        squareWidth += 10;
        squareHeight += 10;

        const [red, green, blue] = getRandomColor(255);
        square.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";

        squares.push(square);
    }

    boxesRef.append(...squares);

};

const handleDestroyClick = () => {
    boxesRef.innerHTML = '';
};

const handleCreateClick = () => {
    const inputValue = inputRef.value;
    createBoxes(Number(inputValue));
};

renderBtn.addEventListener('click', handleCreateClick);
destroyBtn.addEventListener('click', handleDestroyClick);

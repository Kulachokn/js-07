'use strict'

// const listRef = document.querySelector('#categories');
// console.log(listRef);

const itemListRef = document.querySelectorAll('.item');
console.log(itemListRef);
console.log(`В списке ${itemListRef.length} категории.`)


for (let item of itemListRef) {
    const titleRef = item.querySelector('h2').textContent;
    console.log(titleRef);
    const elemValueRef = item.querySelectorAll('li').length;
    console.log(elemValueRef);
}


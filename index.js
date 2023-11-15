// TODO: this file! :)
//state
const numbers = [];
const odds = [];
const evens = [];

//references

const startingNumber = document.querySelector('input');
const addNumber = document.querySelector('form');
const numberBank = document.querySelector('#numberBank1');
const oddNumber = document.querySelector('#odds1');
const evenNumber = document.querySelector('#evens1');
const sortOne = document.querySelector('#sortOne');
const sortAll = document.querySelector('#sortAll');

//Adding intial number to Number Bank
addNumber.addEventListener('click', (event) => {
    event.preventDefault();
    const number = (startingNumber.value);
    if (number) {
        numbers.push(number);
        updateNumberBank();
    }
    startingNumber.value = '';
});

// Create addevent for Sortall button
sortAll.addEventListener('click', () => {
    while (numbers.length) {
        const number = numbers.shift();
        sortNumber(number);
    }
    updateNumberBank();
});

//Create addevent for Sort1 button
sortOne.addEventListener('click', () => {
    if (numbers.length) {
        const number = numbers.shift();
        sortNumber(number);
        updateNumberBank();
    }
});


// function to update numbers 
function updateNumberBank() {
    if (numbers.length) {
        numberBank.textContent = numbers.join(', ') + ', ';
    } else {
        numberBank.textContent = '';
    }
}
// function that determins if number is even/odd 
function sortNumber(number) {
    if (number % 2 === 0) {
        evenNumber.textContent += number + ', ';
    } else {
        oddNumber.textContent += number + ', ';
    }
}
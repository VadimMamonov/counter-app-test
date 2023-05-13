const button = document.querySelector('button');
const counterText = document.querySelector('.counter__value')
let counter = 0;

addOnePoolButton.addEventListener('click', function() {
    counter = counter + 1;
    
    counterText.innerText = counter;
});

addTwoPoolButton.addEventListener('click', function() {
    counter = counter + 2;
    
    counterText.innerText = counter;
});

resetButton.addEventListener('click', function() {
    counter = 0;
    
    counterText.innerText = counter;
});




const randomNum = Math.floor(Math.random() * 100) + 1;
const toShow = document.querySelector('.display');
const input = document.querySelector('#num');
const attempt = document.querySelector('.attempts');
const arr = [];
const values = document.querySelector('.values');

const form = document.querySelector('form');
form.addEventListener( 'submit', (e) => {

    e.preventDefault();

    const guessNum = Number(document.querySelector('#num').value);
    input.value = '';
    arr.push_back(guessNum);
    
    if( guessNum === randomNum ){
        toShow.innerHTML = `Congrats! you have guessed the right number : ${randomNum}`;
    }

    else{

        toShow.innerHTML = `Oops! you have guessed the wrong number : ${guessNum}`;

        // values.innerhtml = 
    }

   
});

console.log(randomNum);

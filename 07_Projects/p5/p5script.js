const start = document.querySelector('.start');
const stop = document.querySelector('.stop');

function getRandomColor(){

    const hex = "0123456789ABCDEF";
    let colorValue = "#";

    for( let i = 0; i < 6; i++ ){
        const idx = Math.floor(Math.random()*16);
        colorValue += hex[idx];
    }

    return colorValue;
}

const changeColor = function(){
    document.body.style.background = getRandomColor();
}

let colorChanger = null;

start.addEventListener( 'click', (e) => {

    if (colorChanger === null) {
        colorChanger = setInterval(changeColor, 1000);
    } 
});

stop.addEventListener( 'click', (e) => {
    clearInterval( colorChanger );
    colorChanger = null;
});
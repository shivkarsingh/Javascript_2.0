const btns = document.querySelectorAll('.btn');

btns.forEach( ( btn ) => {
    btn.addEventListener( 'click', () => {
        const color = getComputedStyle(btn).background;
        document.body.style.background = color;
    });
});

const homeBtn = document.getElementsByClassName('fb1')[0];
homeBtn.addEventListener( 'click', () => {
    window.location.href = '../index.html';
});

const resetBtn = document.querySelector('.fb2');
resetBtn.addEventListener( 'click', () => {
    document.body.style.background = "#000000";
});
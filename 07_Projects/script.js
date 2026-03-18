const buttons = document.querySelectorAll('.btn');
const cards = document.querySelectorAll('.info');

function showCard(index) {
  buttons.forEach((btn, i) => btn.classList.toggle('active', i === index));
  cards.forEach((card, i) => card.classList.toggle('active', i === index));
}

buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => showCard(index));
});

// Default: show first project
showCard(0);


// const try1 = document.querySelector('.btnDiff');
// try1.addEventListener( 'click', () => {
//   window.location.href = '/07_Projects/p1/p1index.html';
// }); 

document.querySelectorAll('.btnDiff').forEach( btn => {
  btn.addEventListener("click", function() {
    
    const link = this.getAttribute('data-link');

    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = link;
    }, 200);
  });
});
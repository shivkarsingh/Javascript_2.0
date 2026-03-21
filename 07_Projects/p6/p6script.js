const keyEl = document.querySelector('#key');
const keyCodeEl = document.querySelector('#keyCode');
const codeEl = document.querySelector('#code');

/* Highlight effect for smooth UI feel */
function highlight(el) {
  el.classList.add("updated");
  setTimeout(() => {
    el.classList.remove("updated");
  }, 150);
}

/* Listen to key press */
window.addEventListener("keydown", (e) => {

  keyEl.textContent = e.key === " " ? "Space" : e.key;
  keyCodeEl.textContent = e.keyCode;
  codeEl.textContent = e.code;

  // Add visual feedback
  highlight(keyEl);
  highlight(keyCodeEl);
  highlight(codeEl);

});
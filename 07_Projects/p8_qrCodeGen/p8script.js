const apiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&color=255-255-255&bgcolor=15-15-25&data=";

const inputBox = document.querySelector('.inputBox input');
const btn = document.querySelector('.generateBtn');

btn.addEventListener("click", generate);

btn.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    generate();
  }
});

function generate() {
  create(inputBox.value);
}

async function create(value){

    if( value === "" ){
        document.querySelector('.error').style.display = "block";
        document.querySelector('.qrBox img').style.display = "none";
    }

    else{

        const res = await fetch( apiUrl + `${value}`);
        const url = res.url;

        document.querySelector('.qrBox img').src = url;

        document.querySelector('.error').style.display = "none";
        document.querySelector('.qrBox img').style.display = "block";
    }

}

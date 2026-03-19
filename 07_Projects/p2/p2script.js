const form = document.querySelector('form');

form.addEventListener( 'submit', (e) => {

    e.preventDefault();

    const ht = Number(document.querySelector('#ht').value);
    const wt = Number(document.getElementById('wt').value);
    const res = document.querySelector('.results');

    if(  ht <= 0 || isNaN(ht) ){
        res.innerHTML = "Please enter valid height!";
    }

    else if( wt <= 0 || isNaN(wt) ){
        res.innerHTML = "Please enter valid weight!";
    }

    else{

        const bmi = ( wt / ((ht*ht)/10000) ).toFixed(2);

        if( bmi < 18.6 ){
            res.innerHTML = `Under Weight : ${bmi}`;
        }

        else if( bmi >= 18.6 && bmi <= 24.9 ){
            res.innerHTML = `Normal : ${bmi}`;
        }

        else{
            res.innerHTML = `Over Weight : ${bmi}`;
        }
    }
});
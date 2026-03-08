// MATHS - By default lib with js

console.log(Math);

// It prints the Math object that contains many mathematical properties and methods.

// Properties

console.log( Math.PI );
console.log( Math.E );
console.log( Math.LN10 );
console.log( Math.LN2 ); // natural log
console.log( Math.SQRT2 );

// Functions

console.log( Math.round( 4.6) );
console.log( Math.round( 4.2 ) );
console.log( Math.ceil( 4.1 ) );
console.log( Math.floor( 4.9 ) );
console.log( Math.abs(-4) );
console.log( Math.min( 4,3,5,6,7,82 ) );
console.log( Math.max( 6,4,2,7,8,51 ) );
console.log( Math.sqrt(16) );
console.log( Math.sqrt(21) );
console.log( Math.pow( 2, 3 ) );
console.log( Math.log(Math.E) );
console.log( Math.log10(10) );

// random function 

console.log( Math.random() ); // val bw 0 and 1 - 0 is included and 1 not
console.log( Math.floor( ( Math.random()*10 ) ) );


// Math.random()	-> 0–1
// Math.random()*10	-> 0–10
// Math.floor(Math.random()*10)	-> 0–9
// Math.floor(Math.random()*10)+1 -> 	1–10

const min = 10
const max = 20

console.log( Math.floor( ( Math.random()*(max-min+1) ) ) + min );


for( let i = 0; i < 21; i++ ) { 
    console.log( Math.floor( ( Math.random()*(20-10+1) ) ) + 10 );
}

const score = 11;
console.log( typeof score );

const balance = new Number( 7 );
console.log( typeof balance );

// Important methods

// isNaN()
// isFinite()
// parseInt()
// parseFloat()
// toString() - convert to string and use propt and methods of string
// toFixed()
// toPrecision()
// toLocaleString('en-IN')

console.log(Number.isNaN(score));
console.log(Number.isFinite(score));
console.log(Number.isFinite( Infinity ) );
console.log(Infinity); 

console.log(typeof Number.parseInt("123") ); // number
console.log(typeof Number.parseInt("abc") ); // number
console.log( Number.parseInt("abc") ) // NaN

console.log( typeof score.toString() );

let str1 = Number.parseInt("123");
console.log(str1);

let num1 = 10.7777;
console.log( num1.toFixed(2) ); // 10.78

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// Number.method(value) → Static Method
// These methods belong to the Number object itself, not to a specific number variable.
// So you must call them using Number.

// variable.method() → Instance Method
// These methods belong to the number value itself.
// So you call them using the variable.

// If the method needs a number to check → use Number.method(value)
// If the method modifies the number itself → use variable.method()


// IMPORTANT properties

// Largest possible number in JavaScript.
console.log(Number.MAX_VALUE);
console.log( Number.MIN_VALUE);

// Largest integer that can be accurately represented.
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// Number.NaN - represents a NaN value




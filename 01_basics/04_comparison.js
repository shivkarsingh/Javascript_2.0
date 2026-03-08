// Simple one

console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

// Miscellaneous

console.log("2" > 1);
// true
console.log("02" > 1);
// true

// comparison and equality check behaves diff for equality and comparison
// When comparison operators (>, <, >=, <=) are used, 
// JavaScript converts values to numbers.

console.log( null > 0 );
// false

console.log( null == 0 );
// false

// The loose equality operator (==) has special rules.

// For null:

// null == undefined → true
// null == anything else → false

// So JavaScript does NOT convert null to 0 here.

console.log( null >= 0 );
// true


// undefined → NaN
// undefined == null → true
// undefined == anything else → false

console.log(undefined == 0);
// false
console.log(undefined > 0);
// false
console.log(undefined < 0);
// false
console.log( undefined >= NaN );
// false

// NaN (Not a Number) cannot be compared with anything, including itself.





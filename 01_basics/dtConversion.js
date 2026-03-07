// ------ CASE - 1 -------

let score2 = "77";

let valueInNum = Number( score2 );
console.log( typeof valueInNum );
// number in 77

let num = 101;
let numInStr = String( num );

console.log( numInStr );
// 101 in string


// ------ CASE - 2 -------

let str1 = "11abc";
let value = Number( str1 );

console.log( typeof value );
// it will give output as number

console.log( value );
// but actually it is NaN - not a number


// ------ CASE - 3 -------

let val1 = null;
let val2 = Number( val1 );

console.log( typeof val1 );
// it will give output as object

console.log( typeof val2 );
// it will give output as number

console.log( val2 );
// it will give output as 0


// ------- CASE - 4 --------

let state;
let givenNum = Number( state );

console.log( typeof state );
// output - undefined

console.log( typeof givenNum );
// output - number

console.log( givenNum );
// output - NaN 

// Note - similarly for boolean true -> 1 and false -> 0


// -------- CASE - 5 --------

let isLoggedIn = 1;
let isLoggedOut = 0;
let str = "ok";
let emptyStr = "";

let BoolisLoggedIn = Boolean( isLoggedIn );
let BoolisLoggedOut = Boolean( isLoggedOut );
let Boolstr = Boolean( str );
let BoolemptyStr = Boolean( emptyStr );

console.log( BoolisLoggedIn ); 
// true
console.log( BoolisLoggedOut );
// false
console.log( Boolstr ); 
// true
console.log( BoolemptyStr ); 
// false







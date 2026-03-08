// STRINGS

// can be denoted as both '' and ""

const accountName = "ss";
const repoCount = 11;

console.log( accountName + " = " + repoCount + " value" );

// this method of string concatenation is outdated and not efficient so avoid this

// String Interpolation - we make placeholders and we inject variables - Template Literals

console.log( ` Hello my name is ${accountName} and my repo count is ${repoCount}` );
console.log( `This is a 
    multiline 
    string`);

// declaring string using string constructor
//This creates a String Object, not a primitive string.

// this wraps the string to a object but inside still the string is immutable
// and the obj is mutable

let str = new String( "hello" );
console.log(str); // output - [ String: 'hello' ]

console.log( typeof str ); // object
console.log( typeof accountName ); // string

// Q. Why this works even though strings are immutable ? - Autoboxing

let str1= "hello";
console.log(str1.toUpperCase());

// Because normally methods belong to objects, not primitives.

// The answer is a concept called Auto Boxing (or temporary object wrapping).

// When you write:

// let str = "hello";
// str.toUpperCase();

// JavaScript temporarily converts the primitive string into a String object.
// Internally JavaScript does something like this:

let temp = new String("hello");
temp.toUpperCase();

// After the operation is completed, the temporary object is destroyed.
// So the steps are:

// Primitive value "hello" is created.
// JavaScript temporarily wraps it in a String object.
// The method runs.
// The temporary object is removed.

// This process is called Auto Boxing.

// The original string does not change.
// Because strings are immutable.
// .toUpperCase() returns a new string instead of modifying the original one.

// this autoboxing thing works with othe dt as well 

// Indexing also works for string

// Important Methods

// length
// toUpperCase and toLowerCase
// charAt
// indexOf
// includes
// slice and substring
// split
// trim and trimStart and trimEnd
// replace and replaceAll
// concat

let myName = "Shivkar";

console.log( myName.length );
console.log( myName.toLowerCase() );
console.log( myName.toUpperCase ); // accessing and calling a function 
console.log( myName.charAt(2) );
console.log( myName.indexOf('r') );
console.log( myName.includes("Shiv") );

// slice - slice() is used to extract a part of a string and return it as a new string.
// It does not modify the original string because strings in JavaScript are immutable.

// slice(0,4) → index 0 to 3
// If endIndex is not given - It will slice till the end of the string.

// slice() supports negative indexes. Negative index means counting from the end. 

// in slice negative index is allowed but in substring it is not allowed

console.log( myName.slice( -3 ) );

// string.substring(startIndex, endIndex) - endIndex is excluded
// endIndex is not given - It returns from startIndex to the end of the string.

// If Start > End (Important behavior)
// substring() will swap the values automatically. whereas in slice it will return empty string

// substring() does NOT support negative values. Negative values become 0.

// slice is in modern usage and substring is old

console.log( myName.substring(0, 4) );

// trim() Method in JavaScript

// trim() is used to remove whitespace from the beginning and end of a string. not from the middle

// Whitespace includes:
// spaces " "
// tabs \t
// new lines \n

let inputName = "   shivkar  singh  "
console.log( inputName.trim() );

// replace and replaceAll

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('hitesh', 'shivkar'))
console.log(url.replaceAll('hitesh', 'shivkar'))

// split() - is used to convert a string into an array by breaking the string at a specified separator.

// string.split(separator, limit)

// separator	where the string should be split
// limit	maximum number of elements in the array (optional)

// If you pass empty string "", it splits every character.
// If separator does not exist, it returns the whole string as one element.

let newArr = url.replaceAll( 'hitesh', 'shivkar' ).replace( 'choudhary', 'singh' ).split( '/');
console.log( newArr );

// concat
// string1.concat(string2, string3, ...)

let str11 = "I";
let str2 = "Love";
let str3 = "JS";

let str4 = str11.concat( str11, " ", str2, " ", str3 );
console.log(str4);

// note join and reverse are array methods not string 


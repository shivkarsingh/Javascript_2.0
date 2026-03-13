console.log(addone(5)) // no error due to hoisting

function addone(num){ //function 
    return num + 1
}



addTwo(5) // error due to diff way of function writing
const addTwo = function(num){ // function expression 
    return num + 2
}


// The global object is the top-level object that exists everywhere in the program.

// It contains:
// built-in functions
// global variables
// timers
// environment APIs

// Example of global things:

// Environment	Global Object
// Browser	-> window
// Node.js	-> global
// Modern -> standard	globalThis

// Global Scope	Everywhere
// Function Scope	Inside a function
// Block Scope	Inside { } block




// 1. What is a Global Object?

// The global object is the top-level object that exists everywhere in the program.

// It contains:
// built-in functions
// global variables
// timers
// environment APIs

// Example of global things:

// setTimeout()
// console
// Math
// Date

// These are available everywhere, because they belong to the global object.

// 2. Global Object in Different Environments

// JavaScript runs in different environments.

// Environment	Global Object
// Browser	window
// Node.js	global
// Modern standard	globalThis

// So:

// Browser → window
// Node → global
// Universal → globalThis

// 3. Global Object in Browser

// In browsers the global object is:
// window

// Example:
// console.log(window);

// It contains many browser APIs:

// window
//  ├ document
//  ├ console
//  ├ alert
//  ├ location
//  ├ setTimeout
//  └ localStorage

// Example:

// var name = "Shiv";
// console.log(window.name);

// Output
// Shiv

// Because:
// var variables attach to window

// 4. this in Browser (Global Scope)

// In the browser global scope:

// console.log(this);

// Output:
// Window object

// So:

// this === window

// Example:
// console.log(this === window);

// Output
// true

// 5. Global Object in Node.js

// Node.js does not use window.

// Instead the global object is:
// global

// Example:
// console.log(global);

// It contains things like:

// global
//  ├ console
//  ├ setTimeout
//  ├ process
//  ├ Buffer
//  └ __dirname

// 6. this in Node.js (Important Difference)

// In Node:
// console.log(this);

// Output:
// {}

// Not global.

// Why?
// Because Node wraps every file inside a module wrapper function.

// Internally Node runs your file like this:

// (function(exports, require, module, __filename, __dirname) {

//    // your code here

// });

// So at the top level:
// this → module.exports

// which is:
// {}

// 7. Comparison Table

// Situation	Browser	Node.js
// Global Object	window	global
// Universal global	globalThis	globalThis
// Top-level this	window	{} (module.exports)
// Variable declared with var	attaches to window	not attached to global

// 9. Universal Global Object (Modern JS)

// Modern JS introduced:

// globalThis
// It works everywhere.

// Example:
// console.log(globalThis);

// Browser:

// globalThis === window

// Node:

// globalThis === global


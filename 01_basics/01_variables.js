const accounId = 11;
let accountEmail = "shivkarcse@gmail.com";
var accountPassword = "Shivkar_itsme";
accountCity = "Jaipur";

// Note - const cannot be changed and rest can be 

console.log("printing all above at once");

console.table( [ accounId, accountEmail, accountCity ] );

/*
prefer not to use var
because of issues in block scope
and functional scope 
*/

let accountState;

console.log(accountState);

// Why var attaches to the Global Object

// In browser, when you declare:
// var a = 10;

// JavaScript automatically attaches it to window.

// Example:
// var a = 10;
// console.log(window.a);

// Output
// 10

// Because internally:

// window.a = 10
// But let and const do NOT attach to the global object

// Example:

// let b = 20;
// const c = 30;

// console.log(window.b);
// console.log(window.c);

// Output
// undefined
// undefined

// Because:

// let and const do not become properties of window

// Why Node.js Doesn't Attach var to Global

// Node works differently.
// Node wraps every file in a module wrapper function.
// Internally Node runs your code like this:

// (function(exports, require, module, __filename, __dirname) {

//   your code here

// });

// So when you write:
// var a = 10;

// It becomes:

// (function(...) {

//   var a = 10;

// });

// So a stays inside the function, not global.

// That’s why:

// this.a → undefined

// Feature	var	let	const
// Scope	Function	Block	Block
// Reassignment	✔ Yes	✔ Yes	❌ No
// Redeclaration	✔ Yes	❌ No	❌ No
// Hoisting	Yes (undefined)	TDZ	TDZ
// Initialization needed	No	No	Yes

/*

very imp note

var in global scope -> it becomes global variable
inside function -> function scoped not outside visible
inside a block scope -> it ignores block scope


note to stop from moving to next line which is done by clg use process.stdout.write()
but only available to node js env not in browser
 */
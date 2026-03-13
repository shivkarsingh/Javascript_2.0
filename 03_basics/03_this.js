const user = {

    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        // this points to current obj which is user
    }
}

user.welcomeMessage();
console.log(this); // this points to empty object which is global obj

// but if i do this same thing in browser console then i will get 
// window object as this window obj is global obj

function chai(){
    console.log("first");
    console.log( this ); // too many parameters
}

chai();

// this is about who called the function not where it is written
// no obj called chai so this = global obj thats why this.username was undef
// this is a special keyword that refers to the object that is currently executing the function.

// In simple words:
// this points to the object that is calling the function.

// Think like this:

// A function is being called by someone (an object).
// this refers to that caller.

// const user = {
//   name: "Shiv",
//   age: 22,

//   greet: function() {
//     console.log(this.name);
//   }
// };

// user.greet();

// Output
// Shiv

// What happens here?
// user object calls the function.
// Therefore this points to user object.

// So:
// this.name → user.name → "Shiv"


// const user1 = {
//   name: "Shiv",
//   greet: function() {
//     console.log(this.name);
//   }
// };

// const user2 = {
//   name: "Rahul",
//   greet: user1.greet
// };

// user1.greet();
// user2.greet();

// Output
// Shiv
// Rahul


// function greet() {
//   console.log(this);
// }

// greet();

// In Browser
// Window object

// Why?
// Because the global object calls the function.

// In browser:
// global object = window

// So
// this → window

// const name = "Shiv";

// function show() {
//   console.log(this.name);
// }

// show();

// Output (browser):
// Shiv

// Because:

// this → window
// and
// window.name = "Shiv"

// this in Arrow Functions

// They borrow this from the parent scope.

// Example:

// const obj = {
//   name: "Shiv",
//   greet: () => {
//     console.log(this.name);
//   }
// };

// obj.greet();

// Output:
// undefined

// Because arrow function does not bind this.


// Situation	this points to
// Object method	-> the object
// Normal function	-> global object
// Arrow function	-> parent scope
// Constructor	-> new object

// this in constructor

// function User(name) {
//   this.name = name;
// }

// const u1 = new User("Shiv");

// console.log(u1.name);

// Here:

// this → newly created object
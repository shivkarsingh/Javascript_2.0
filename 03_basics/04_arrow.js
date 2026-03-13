function sayMyName(){
    console.log(this);
}

const chai = function(){
    console.log(this)
};

const func = () => {
    console.log( "grinding");
}

// sayMyName();
// chai();
func();

// You can use this inside an arrow function, but arrow functions do not have their own this. They inherit this from their surrounding (parent) scope.

// 1. Normal Function (function)
// A normal function creates its own this depending on how the function is called.

// const obj = {
//   name: "Shivkar",
//   sayName: function () {
//     console.log(this.name);
//   }
// };

// obj.sayName();

// Output:
// Shivkar

// Here:
// this → points to obj
// Because the function is called as obj.sayName().

// 2. Arrow Function (=>)

// Arrow functions do NOT create their own this.
// Instead, they take this from the surrounding scope (this is called lexical this).

// Example:

// const obj = {
//   name: "Shivkar",
//   sayName: () => {
//     console.log(this.name);
//   }
// };

// obj.sayName();

// Output:
// undefined

// Why?

// Because:
// Arrow function does not look at obj
// It takes this from the outer scope (global scope)
// In Node.js, the global this usually refers to module.exports or {}.

// So:

// this.name → undefined


const addTwo = ( num1, num2 ) => {
    return num1+num2;
}

console.log(addTwo(2,3));

const mulTwo = ( num1, num2 ) => num1*num2;

console.log(mulTwo(3,4));

const funObj = ( age ) => ( { valid : true } );

console.log(funObj(19));

// () => () do not require return statement whatever inside the () will return
// () => { return .... } require return

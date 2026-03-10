// Copy means creating another variable with the same data.
// There are two types:

// 1. Shallow Copy
// 2. Deep Copy

// 1. Shallow Copy

// A shallow copy copies only the first level of an object.
// If there are nested objects, they are not copied, only their reference is copied.

// So both objects share nested data.

let obj1 = {
  name: "Shiv",
  address: {
    city: "Varanasi"
  }
};

let obj2 = { ...obj1 };

obj2.name = "Rahul";
obj2.address.city = "Delhi";

console.log(obj1.name);
console.log(obj1.address.city);

//Output
// Shiv
// Delhi

// Ways to create Shallow Copy

// Spread operator
// let obj2 = { ...obj1 };

// Object.assign
// let obj2 = Object.assign({}, obj1);

// Array copy
// let arr2 = [...arr1];

// All create shallow copy.

// 2. Deep Copy 

// A deep copy copies everything completely.
// Even nested objects are copied.
// So both objects become fully independent.

// let obj1 = {
//   name: "Shiv",
//   address: {
//     city: "Varanasi"
//   }
// };

// let obj2 = structuredClone(obj1);
// obj2.address.city = "Delhi";
// console.log(obj1.address.city);

// Output
// Varanasi

// Both are separate objects.

// Best modern method

// let copy = structuredClone(obj);

// Works for:

// objects
// arrays
// maps
// sets
// nested objects

/*

Feature	                 Shallow Copy	        Deep Copy

First level	             copied	                copied
Nested objects	         reference shared	    copied
Memory	                 partially shared	    completely separate
Spread operator	         Yes	                No
structuredClone	         No	                    Yes


[] - square brackets 
{} - curly braces
() - parenthesis
*/


// Copy an array

// This example shows three ways to create a new array from the existing fruits array: first by using spread syntax, then by using the from() method, and then by using the slice() method.


const fruits = ["Strawberry", "Mango"];

// Create a copy using spread syntax.
const fruitsCopy = [...fruits];
// ["Strawberry", "Mango"]

// Create a copy using the from() method.
const fruitsCopy2 = Array.from(fruits);
// ["Strawberry", "Mango"]

// Create a copy using the slice() method.
const fruitsCopy3 = fruits.slice();
// ["Strawberry", "Mango"]

// All built-in array-copy operations (spread syntax, Array.from(), Array.prototype.slice(), and Array.prototype.concat()) create shallow copies. If you instead want a deep copy of an array, you can use JSON.stringify() to convert the array to a JSON string, and then JSON.parse() to convert the string back into a new array that's completely independent from the original array.


const fruitsDeepCopy = JSON.parse(JSON.stringify(fruits));

// You can also create deep copies using the structuredClone() method, which has the advantage of allowing transferable objects in the source to be transferred to the new copy, rather than just cloned.

// Finally, it's important to understand that assigning an existing array to a new variable doesn't create a copy of either the array or its elements. Instead the new variable is just a reference, or alias, to the original array; that is, the original array's name and the new variable name are just two names for the exact same object (and so will always evaluate as strictly equivalent). Therefore, if you make any changes at all either to the value of the original array or to the value of the new variable, the other will change, too:

const fruitsAlias = fruits;
//   'fruits' and 'fruitsAlias' are the same object, strictly equivalent.
fruits === fruitsAlias; // true
//   Any changes to the 'fruits' array change 'fruitsAlias' too.
fruits.unshift("Apple", "Banana");
console.log(fruits);
//   ['Apple', 'Banana', 'Strawberry', 'Mango']
console.log(fruitsAlias);
//   ['Apple', 'Banana', 'Strawberry', 'Mango']

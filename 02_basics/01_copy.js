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
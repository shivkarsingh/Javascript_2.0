// Array - in js they are obj and collections of items can be of same and diff dt
// Have 0-based indexing
// Array copy operations create shallow copies not deep copies 



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


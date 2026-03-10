// Array - in js they are obj and collections of items can be of same and diff dt
// Have 0-based indexing
// Array copy operations create shallow copies not deep copies 

const myArr = [ 1, 2, 7, 11, "singh" ];
const newArr = new Array( 1, 2, 3, 4, 5 );

console.log( myArr );
console.log( newArr );

//Array properties

// length

// Array methods

// push and pop
// unshift and shift 
// includes
// indexOf
// join
// slice
// splice
// concat
// spread
// reverse
// sort
// flat
// isArray
// from
// of
// map
// filter
// reduce


// Insertion and Deletion

myArr.push(6);
myArr.push(1,7);
myArr.pop();
console.log(myArr);
// pop and shift can remove one element, push unshift more one
myArr.unshift(0,6);
myArr.shift();
console.log(myArr);

// includes and indexOf

console.log(myArr.includes(69));
console.log(myArr.indexOf(69)); // -1

// Join

// join() is used to convert an array into a string.
// It joins all elements of the array together.

// Syntax
// array.join(separator)

// separator → what you want between elements , default is ,


const arr = myArr.join("-");
console.log(arr); // 6-1-2-7-11-singh-6-1

// slice

// slice() is used to extract (copy) a portion of an array.
// It does NOT change the original array.

// array.slice(start, end)

// start → index where copying begins
// end → index where copying stops (not included)

let a = myArr.slice( 3, 6);
console.log(a);
console.log(myArr);

// splice

// splice() is used to add, remove, or replace elements in an array.
// It changes the original array.

// array.splice(start, deleteCount, item1, item2)
// start → index where operation starts
// deleteCount → number of elements to remove
// item1,item2 → new elements to insert

// let arr = [10,20,30];
// arr.splice(1,0,15);
// console.log(arr);

// Output
// [10,15,20,30]

let b = myArr.splice( 5,7)
console.log(b);
console.log(myArr);

// note

const marvelHeros = [ "ironman", "thor", "spiderman" ];
const dcHeros = [ "batman", "superman", "flash" ];

// const l = marvelHeros.push( dcHeros );
// console.log( l ); // 4 push returns length so 
// console.log( marvelHeros );

//concat

// concat() is used to combine (merge) two or more arrays.
// Important:
// concat() does NOT change the original arrays
// It returns a new array.

const result = marvelHeros.concat( dcHeros );
console.log(result);

// spread operator 

const allHeros = [ ...marvelHeros, ...dcHeros, "naagraj", "shaktiman" ];
console.log(allHeros);

// sort and reverse 

const num = [ 1, 5, 7, 3 ];
console.log( num.reverse() );
console.log( num ); // changes original array
console.log( num.sort() );
console.log( num ); // changes original array
console.log( num.length ); 


// flat

// flat() is used to remove nested arrays and make one single array.
// myArr.flat(depth)
// If you don't know nesting level: arr.flat(Infinity)
// returns new array, does NOT modify original array


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

// from and of

// Array.from() is used to convert other data types into an array.

console.log(Array.isArray("shivkar"));
console.log(Array.from("Singh"));

// Array.of() creates an array from given values.

// Because the normal Array() constructor behaves differently.

// Example:

// let arr = new Array(3);
// console.log(arr);

// Output
// [empty × 3]

// It creates empty slots, not [3].

// But:
// Array.of(3)

// Output
// [3]

// So Array.of() ensures values are always treated as elements.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

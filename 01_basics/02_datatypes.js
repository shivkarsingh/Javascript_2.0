"use strict"; // treat all JS code as newer version

// all dt is divided into these two categories and 
// the main diff bw these two categories is just storing and accessig it from memory 
// mutabality is also there to make them different from each other



// Primitive dt
// Primitive types store single simple values and are immutable (cannot be changed directly).

// 1. Number
let age = 22;
let price = 10.5;

// 2. String 
let name = "Shivkar";
let surname = 'Singh'; 
// `` template string also using backticks

// 3. Boolean 
let isAdmin = true;

// 4. Undefined - value not assigned 
let currState;
let oldState = undefined;

// 5. Null - intentionally empty value
let temp = null;

// 6. BigInt
let bigNumber = 123456789012345678901234567890n;

// 7. Symbol - used to create unique identifiers
let id1 = Symbol( 'id' );
let id2 = Symbol( 11 );


// Non-Primitive (Reference) Data Types
// These store collections or complex data.

// 1. Object
let person = {
    name : "shivkar",
    surname : "singh",
    age : 22
}

// 2. Arrays - Special type of obj
let lang = [ 'js', 'c++', 'python' ];
let mixedArray = [10, "Hello", true, null, {name: "John"}, [1,2,3]];

// 3. Function - also treated as obj in js
let giveInfo = function(){
    console.log( person );
}

giveInfo();

// type of operator

console.log( typeof null );
// for null gives an obj

console.log( typeof(undefined) );
// gives undefined

console.log( typeof(age) );
// gives number

// with this index is mapped with the key instead of 0 and 1
console.table({
 age: typeof age,
 name: typeof name,
 isAdmin: typeof isAdmin,
 currState: typeof currState,
 temp: typeof temp,
 id1: typeof id1,
 bigNumber: typeof bigNumber
});

console.table([
 typeof person,
 typeof lang,
 typeof giveInfo
]);


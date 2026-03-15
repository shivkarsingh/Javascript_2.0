// for in, for of, for each loop

// for of loop 

/*
The for...of loop in JavaScript is used to iterate over values of iterable objects.
In simple words, it directly gives the values of elements one by one.

Iterable objects include:

Arrays
Strings
Maps
Sets
NodeLists
TypedArrays

It does NOT work directly with normal objects {}.

Basic Syntax

for (const element of iterable) {
    code
}

element → current value
iterable → array, string, map, set etc.

Avoid when:

Iterating objects
You need indexes

for...of → arrays
for...in → objects

✅ Simple way to remember

for...of → values
for...in → keys

*/

// for of on array 

const num = [1,2,3,4,5];

for( const val of num ){
    console.log(val);
}

// for of on string

let str = "Shiv";

for( const ch of str ){
    console.log(ch);
}

// for of on obj is not going to work

// for of on map

const mp = new Map( [
    [ 1 , "shivkar" ],
    [ 2 , "singh" ],
    [ 3 , 22 ]
    ]
);

for( const pr of mp ){
    console.log(pr);
}

for( const key of mp.keys() ){
    console.log( key );
}

for( const value of mp.values() ){
    console.log(value);
}

for( const entry of mp.entries() ){
    console.log( entry );
}

for( const [k,v] of mp ){
    console.log(`${k} -> ${v}`);
}


// for in loop

/*

Basic Syntax
for (const key in object) {
    code
}

key → property name
object → object you want to iterate

*/

// for in with object

const user = {
    name : "shivkar_singh",
    age : 22,
    isIn : true
}

for( const key in user ){
    // console.log(key);
    // console.log(user[key]);
    console.log(`${key} -> ${user[key] }`)
}
/*

for...in with Arrays

for...in can work with arrays, but it returns indexes.

const arr = [10,20,30];

for (const index in arr) {
    console.log(index);
}

Output
0
1
2

If you want values:

for (const index in arr) {
    console.log(arr[index]);
}

Output

10
20
30

⚠️ But this is not recommended.

*/

// for in does not work with maps
// Because Map is iterable, not enumerable.


// ITERABLE AND ENUMERABLE

/*

Concept	    Meaning	                                Loop Used
Iterable	Can iterate over values	                for...of
Enumerable	Object properties that can be listed	for...in

An iterable is an object whose values can be accessed one by one automatically using iteration.

In simple words:
👉 Iterable = something you can loop with for...of

example of iterable obj - array string map set 

Because they have a special method: Symbol.iterator


Enumerable means:

👉 properties (keys) of an object that can be listed or counted
These properties can be accessed using:

for...in
Object.keys()

Example Showing Both

const arr = [10,20,30];

Using for...of (Iterable)

for (const value of arr) {
    console.log(value);
}

Output
10
20
30

Using for...in (Enumerable)

for (const index in arr) {
    console.log(index);
}

Output
0
1
2

Because array indexes are enumerable keys.

Why Object is NOT Iterable


Because objects do not have Symbol.iterator.
But they are enumerable, so for...in works.

Enumerable refers to object properties (keys) that can be listed using:

for...in
Object.keys()
Object.values()
Object.entries()

Why Map is NOT Enumerable

A Map does not store data as object properties.

Objects store data like this internally:

object
 ├─ key: value
 ├─ key: value

Example:

const obj = {
    a: 1,
    b: 2
};

These are properties of the object, so they can be enumerated.

But Map stores data internally in a special data structure, not as object properties.

Example:

const mp = new Map([
    [1, "A"],
    [2, "B"]
]);

Internally it's like:

Map
 ├─ [1 → "A"]
 ├─ [2 → "B"]

These are entries, not properties.

So for...in cannot see them.

*/

// for each method

// works only for arrays not for objects to use it we have to convert keys or values to array using methods

// The forEach() loop in JavaScript is a method used to iterate over arrays. It executes a function once for every element in the array.

// array.forEach(function(element, index, array) {
    // code to run for each element
// });

// Parameters:

// Parameter	Meaning
// element	    Current value
// index	    Index of element
// array	    Original array


const coding = [ "js", "ruby", "java", "python", "cpp" ];

coding.forEach( (item) => {
    console.log(item);
});

coding.forEach( function( item ){ console.log(item) }
);

//  function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )




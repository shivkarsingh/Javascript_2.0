// Map = a collection of key–value pairs where keys can be of any type.

// But objects have limitations:

// Object Problem	            Map Solution

// Keys must be string/symbol	Keys can be any type
// Order not guaranteed	    Insertion order preserved
// Difficult to get size	    map.size
// Iteration harder	        Direct iteration
// duplicate value             unique value

// Empty Map

// const map = new Map();

// Map with values

// const map = new Map([
//     ["name", "Shiv"],
//     ["age", 22],
//     ["country", "India"]
// ]);

// 1. set()
// Adds value.

// map.set("name", "Shiv");
// map.set("age", 22);

// You can chain:

// map.set("a",1).set("b",2);

// 2. get()
// Returns value.

// console.log(map.get("name"));

// Output
// Shiv

// 3. has()
// Checks if key exists.

// console.log(map.has("age"));

// Output
// true

// 4. delete()
// Removes key.

// map.delete("age");


// 5. clear()
// Removes all elements.

// map.clear();

// 6. size
// Returns number of elements.

// console.log(map.size);

// Map Keys Can Be ANYTHING
// This is the biggest advantage.

// Number key
// map.set(1, "one");

// Boolean key
// map.set(true, "yes");

// Object key
// const obj = {id:1};
// map.set(obj, "user object");

// Objects cannot do this properly.


// Map Iteration Methods

// keys()
// for (const key of map.keys()) {
//     console.log(key);
// }

// values()
// for (const value of map.values()) {
//     console.log(value);
// }

// entries()
// for (const entry of map.entries()) {
//     console.log(entry);
// }

// Output

// ["name","Shiv"]
// ["age",22]
/*

JavaScript mainly uses two places in memory:

1. Stack memory
2. Heap memory

1. Stack Memory

Stack stores primitive data types.

let age = 25;
let name = "Shivkar";

Memory looks like:

STACK
-----
age  → 25
name → "Shivkar"

Here the actual value is stored directly in the variable.
When you copy a primitive variable, a new copy is created.

Example:
let a = 10;
let b = a;
b = 20;
console.log(a);
console.log(b);

Output
10
20

Memory concept:
STACK
-----
a → 10
b → 20

Changing b does NOT affect a.
This is called:
Copy by value

2. Heap Memory

Heap stores non-primitive data types.

Examples:
Objects
Arrays
Functions

let person = {
  name: "Shivkar",
  age: 22
};

Memory looks like this:

STACK              HEAP
------             --------
person  ───────→   {name:"Shivkar", age:22}

Important point:

Stack stores the reference (address)
Heap stores the actual object

Copy by Reference

Example:

let user1 = {
  name: "John"
};
let user2 = user1;
user2.name = "Alex";
console.log(user1.name);

Output:
Alex

Why?
Memory concept:

STACK              HEAP
------             ----------
user1 ──┐
        ├──→ { name:"Alex" }
user2 ──┘

Both variables point to same object in heap.
So changing one affects the other.
This is called:
Copy by reference


Objects can be large and complex.
If everything was stored in stack:
Memory would overflow quickly
So large data is stored in heap.


Garbage Collection
JavaScript automatically removes unused objects from heap.

Example:
let user = {name:"John"};
user = null;

Now the object has no reference.
JavaScript's Garbage Collector deletes it from heap.
This prevents memory leaks.


*/
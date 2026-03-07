/*

Primitive dt are immutable whereas non-primitive ones are mutable

1. Mutable in JavaScript

Mutable means: the value can be changed after it is created.
If something is mutable, you can modify its contents without creating a new object.

Example
let arr = [1, 2, 3];
arr[0] = 100;
console.log(arr);

Output
[100, 2, 3]

Here we changed the first element of the array.
The same array in memory was modified.
So arrays are mutable.

Another Example (Object)
let person = {
  name: "Shiv",
  age: 20
};
person.age = 25;
console.log(person);

Output
{name: "Shiv", age: 25}

We changed the value of age.
The object itself was modified, not replaced.

So objects are mutable.

2. Immutable in JavaScript

Immutable means: the value cannot be changed after it is created.
If you try to modify it, JavaScript creates a new value instead of changing the old one.

Example (String)
let name = "Shiv";
name[0] = "R";
console.log(name);

Output
Shiv

Nothing changed.
Because strings are immutable.

Another Example

let str = "Hello";
str = str + " World";
console.log(str);

Output
Hello World

Here JavaScript did not modify the old string.
Instead it created a completely new string.


Example:

let x = 10;
x = 20;

Here 10 is not changed, instead x now points to a new value 20.

Example:
let arr = [1,2,3];
arr.push(4);

Output
[1,2,3,4]

Same array modified.

Important Interview Example
This question is very common.

let a = {name:"Shiv"};
let b = a;
b.name = "Rahul";
console.log(a.name);

Output
Rahul

Why?

Because objects are mutable and stored by reference.
Both a and b point to same object in heap memory.
So changing b also changes a.

One Important Concept (Very Important)

Strings look like arrays but they are immutable.

Example:

let str = "hello";
str[0] = "H";
console.log(str);

Output
hello

Why JS have to do this ?

Reason 1: Performance ⚡

If large objects were immutable, JavaScript would have to create a new object every time.

If arrays were immutable, JS would have to copy the entire array every time.
That would be very slow.
So objects and arrays are mutable for performance.

Reason 2: Memory Efficiency

Objects can be very large.
Instead of copying them everywhere, JavaScript shares references.

Reason 3: Safety for Primitive Values

Primitive values are immutable because:
They are simple values
They should behave predictably
They should not change accidentally
Even though objects are mutable, you can force immutability using:


let obj = Object.freeze({name:"Shiv"});
obj.name = "Rahul";
console.log(obj.name);

Primitive → Immutable → Stored by value
Objects → Mutable → Stored by reference

Mutable objects exist because JavaScript stores them in heap memory and passes them by reference, allowing modification of the same object.

Primitive values are immutable because they are stored directly in stack memory and copied by value, ensuring safety and predictability.


VERY IMPORTANT NOTE

const protects the reference, not the object.

Q. We will understand why this works even though const means constant.

const obj = { a: 1 };
obj.a = 5;
console.log(obj);

Output
{ a: 5 }

1. What const Actually Means

Many beginners think:
const means the value cannot change.
But that is not correct.

Correct meaning:

const means the variable reference cannot change.
It does not mean the object itself cannot change.

2. Example with Primitive Value

const a = 10;
a = 20;

This will give an error:
TypeError: Assignment to constant variable

Why?

Because you are trying to change the value stored in the variable.
For primitives, the variable stores the actual value, so changing it means changing the variable itself.

3. What Happens with Objects

Objects are stored in heap memory, and variables store only a reference (address).

Example:
const obj = { a: 1 };

Memory looks like this:

Stack
-----
obj → reference → Heap

Heap
-----
{ a: 1 }

obj holds a reference (address) pointing to the object.

4. What const Protects

const protects the reference, not the object.
So this is NOT allowed:
obj = { a: 10 };

Error:
Assignment to constant variable

Because you are trying to change the reference.

5. But This Is Allowed

obj.a = 5;

Why?

Because you are not changing the reference.
You are modifying the object stored in heap memory.
The reference remains the same.

*/

const arr = [ 1, 2, 3 ];
arr.push( 4 );
console.log(arr);

// not allowed arr = [ 4, 5, 6 ]; 

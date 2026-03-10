// OBJECTS - imp note
/* 
There are two ways to declare obj 
1. Literal way - isse singleton nhi bana sakte 
2. Constructor way - isse singleton obj bana sakte hai

internally js in literal do with const way
A singleton means:
Only ONE instance (one object) exists.
In simple words:
The same object is used everywhere.

Object created using Literal

Example:

const user = {
  name: "Shiv",
  age: 22
};

This is called object literal.
But here:
You can create many objects manually.

Example:

const user1 = {name:"Shiv"};
const user2 = {name:"Rahul"};

So these are different objects.

That’s why people say:
Object literal → not singleton
Because you can easily create many objects.

const user = new Object();

This is object constructor.

But here is the important thing:
Constructor is generally used when you want controlled creation of objects.

function User(name){
   this.name = name;
}

const u1 = new User("Shiv");
const u2 = new User("Rahul");

This still creates multiple objects.
So constructor itself is NOT singleton.

Singleton pattern means:

No matter how many times you call it,
only ONE object will ever exist.

Singleton is used when only one object should exist.

Examples:

Database connection
Configuration settings
Logger
Cache

Because having multiple instances may cause problems.

Object literal → simple object creation
Constructor → used in patterns where singleton can be implemented

But JavaScript objects themselves are not automatically singleton.


*/

// Object.create() is used to create a new object using another object as its prototype.

const person = {
  greet() {
    console.log("Hello");
  }
};

const user = Object.create(person);

user.greet();

// user → person → Object
// It is used for inheritance without classes.
// obj → person → Object.prototype

const obj = Object.create(null);

console.log(obj);

// Now the object does not inherit anything.
// obj → null
// No methods like: toString() hasOwnProperty()


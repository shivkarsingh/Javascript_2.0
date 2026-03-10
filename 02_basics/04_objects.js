// Objects

const JsUser = {
    name : "shivkar",
    "fullName" : "shivkar_singh",
    age : 22,
    location : "Lucknow",
    email : "shivkar@gmail.com",
    isLoggedIn : false,
    lastLoginDays : [ "Mon", "Tue" ],
}

console.log( JsUser.name );
console.log( JsUser["name"] );

console.log( JsUser.fullName );
console.log( JsUser["fullName"]);

JsUser.email = "shivkarcse@gmail.com";
console.log(JsUser);

// Object.freeze( JsUser );

// JsUser.email = "shivkarggg@gmail.com";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting()); will give also undefined as function is returning nothing
// console.log(JsUser.greetingTwo());

JsUser.greeting();
JsUser.greetingTwo();

// Key as a Symbol

// Create a Symbol
// const mySym = Symbol("key1");

// Here:
// Symbol("key1")

// "key1" is just a description
// Every symbol is unique
// Use Symbol as an Object Key
// To use a symbol as a key, you must use square brackets [].

const mySym = Symbol("key1");

const JsUser11 = {
    name: "Shiv",
    age: 22,
    [mySym]: "mySymbolValue"
};

// Important:

// [mySym]
// Without brackets it will become a string key, not a symbol.
// Access the Symbol Property
// You cannot use dot notation.

// Wrong:
// JsUser.mySym

// Correct:
// JsUser[mySym]

// Example:
console.log(JsUser[mySym]);

// Output
// mySymbolValue


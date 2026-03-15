/*
A callback in JavaScript is a function that is passed as an argument to another function and is executed later.

Simple definition:

A callback is a function that runs after another function finishes its task

function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Shiv", sayBye);

Output
Hello Shiv
Goodbye!

Explanation:
greet() runs first -> Then it calls the callback function sayBye() So here: sayBye → callback function

Callbacks are mostly used for asynchronous operations like:

reading files
API calls
timers
database queries

Because these operations take time.

Many JS array methods use callbacks.

Example: map()

const nums = [1,2,3];

nums.map(function(num){
    return num * 2;
});

Here

function(num){
 return num * 2;
}
 
is a callback function.

Synchronous Callback
Runs immediately.

Example:

[1,2,3].forEach(function(num){
    console.log(num);
});

Asynchronous Callback
Runs later.

Example:

setTimeout(function(){
    console.log("Hello");
},1000);

Example of filter()

const nums = [1,2,3,4,5];

const result = nums.filter(function(num){
    return num > 2;
});

console.log(result);

Output
[3,4,5]

Main function → filter()
Callback function → function(num){ return num > 2 }

Unlike setTimeout, the callback in filter() is not executed after the main function finishes.

Instead:
filter() executes the callback internally for every element of the array.

So the callback is controlled by filter().

JavaScript internally does something like this:

Step 1 → take first element (1)
Step 2 → run callback
Step 3 → check result
Step 4 → decide to keep or discard
Step 5 → move to next element


Conceptually filter() works similar to this:

function myFilter(array, callback){
    const result = [];

    for(let i = 0; i < array.length; i++){
        if(callback(array[i])){
            result.push(array[i]);
        }
    }

    return result;
}

Usage:

myFilter(nums, function(num){
    return num > 2;
});

So the main function (filter) keeps calling the callback repeatedly.


*/
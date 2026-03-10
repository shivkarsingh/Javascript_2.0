const tinderUser = {};
const bumbleUser = new Object();

console.log( tinderUser );
console.log( bumbleUser );

const regularUser = {
    name : {
        officialName : {
            givenName : "shivkar",
            titleName : "singh"
        }
    }
}

console.log( regularUser.name.officialName.givenName );

// Merging two objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

const obj4 = { obj1, obj2 }

console.log(obj4); // it will not merge instead make nested obj

// In js there are two ways to merge two obj

// Using Object.assign()
// Using the spread operator ...

// spread operator - best and modern way 
const obj5 = { ...obj1, ...obj2, ...obj3 };
console.log( obj5 );

// using Object.assign()

// Object.assign(target, source1, source2)
const obj6 = Object.assign({}, obj1, obj2)
console.log(obj6);


// json and api

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

console.log(users[1].email);


// Important functions

// Object.keys(objname) - Returns all keys of an object in an array.
// Object.values() - Returns all values of an object in an array.
// Object.entries() - Returns key-value pairs as arrays.
// Object.assign()
// Object.freeze() - Makes object completely immutable.
// Object.seal() - You cannot add or delete properties, but you can modify existing values.
// objname.hasOwnProperty() - Checks if object contains a specific key.
// Object.create() - Creates a new object using another object as prototype.


const newUser = {
    giverName : "shivkar",
    titleName : "singh",
    isLoggedIn : true,
    age : 22,
    password : "itsme@99"
}

const arr1 = Object.keys(newUser);
const arr2 = Object.values(newUser);
const arr3 = Object.entries(newUser); // 2d array
 
console.log(arr1);
console.log(arr2);
console.log(arr3);

console.log( newUser.hasOwnProperty("password"));
console.log( newUser.hasOwnProperty("age")); 




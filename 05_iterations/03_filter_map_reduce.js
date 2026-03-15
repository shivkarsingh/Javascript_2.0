const lang = [ "c++", "js", "python", "java" ];

lang.forEach( ( name ) => { console.log(name) } );

// note this does not return anything
// thats why other fuctions came in which returns us something

// filter

// array.filter(function(element, index, array){
//     return condition;
// });

const nums = [1,2,3,4,5,6];

const even = nums.filter(num => num % 2 === 0);

console.log(even);

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})

console.log(userBooks);

// map() takes an array → changes each element → returns a new array of the same length.

// array.map(function(element, index, array){
//     return newValue;
// });

// chaining

const myNum = [1,2,3,4,5];

const newNum = myNum.map( num => num*10 ).map( num => num+2 ).filter( num => num%2 === 0 );

console.log(newNum);

console.log(myNum.map( num => num*10 ).map( num => num+4 ).filter( num => num%2 === 0 ));

// reduce

// The reduce() method in JavaScript is used to reduce an array into a single value.

// That value can be:

// a sum
// a product
// an object
// a string
// another array

// In simple words:
// 👉 reduce() takes many values and combines them into one value.

// array.reduce(function(accumulator, currentValue){
//     return updatedAccumulator;
// }, initialValue);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const res = shoppingCart.reduce( ( acc, curr ) => curr.price+acc, 0 );

console.log(res);

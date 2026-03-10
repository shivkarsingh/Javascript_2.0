// Object destructuring

// Object destructuring in JavaScript means extracting values from an object and storing them in variables easily.

// Instead of writing many lines like:

// const user = {
//   name: "Shivkar",
//   age: 22,
//   city: "Gonda"
// };

// const name = user.name;
// const age = user.age;
// const city = user.city;

// We can do it in one line using destructuring.

// If property does not exist, we can give a default value.

// const user = {
//   name: "Shivkar"
// };

// const { name, age = 18 } = user;

// console.log(name);
// console.log(age);

// Nested Object Destructuring
// const user = {
//   name: "Shivkar",
//   address: {
//     city: "Gonda",
//     country: "India"
//   }
// };

// const { address: { city, country } } = user;

// console.log(city);
// console.log(country);


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor} = course;
// const { coursename, price, courseInstructor } = course;

const { coursename : p1, price : p2, courseInstructor : p3 } = course;

console.log(courseInstructor);
console.log(p1,p2,p3);

console.log( typeof p1, typeof course.coursename );

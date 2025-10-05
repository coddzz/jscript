
// Scope & Hoisting
// Hoisting ~

// Variable hoisting
console.log(x); // undefined 
var x = 5;      // let, const gives declaration error. var only works (undifined) before declaration.
console.log(x); 


// Function hoisting 
sayHi(); // "Hello"  ,  works before declaration.
function sayHi() {
  console.log("Hello");
}


// Import hoisting
// // module.js
// export const myValue = 10;
// // main.js
// console.log(myValue); // This works due to import hoisting
// import { myValue } from './module.js';


// Class hoisting 
// new Car(); // ReferenceError: cannot access "Car" before initialization
// class Car{}
// you cannot accessed a class before its declaration.


// Bset Practices
// • Keep scope as local as possible
// • Declare variables and functions before using them.
// • Always use let and const to create variables
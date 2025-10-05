
// Scope & Hoisting


// Scopes
// Scopes --  Global, Function() & Block scopes {}

let globalVar = "I’m global";

function testScope() {        
  let localVar = "I’m local";
  console.log(globalVar); 
  console.log(localVar);
}
testScope()
console.log(globalVar)  
// console.log(localVar); // Error outside


// Hoisting
// Hoisting --  (var / functions are used to workd codes before declaration )

// Variable hoisting
console.log(x); // undefined 
var x = 5;      // let, const gives declaration error. var only works (undifined) before declaration.
console.log(x); 


// Function hoisting 
sayHi(); // "Hello"  ,  works before declaration.
function sayHi() {
  console.log("Hello");
}

// it's important to know that only function declarations are hoisted.
// Function expressions are not hoisted.
// console.log(addNums(1,3)); 
// // ReferenceError: cannot access "addNums" before initialization
const addNums = function (a,b) {
return a + b;
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
// • Declare variables and functions before using them.
// • Always use let and const to create variables

// • Keep scope as local as possible
// • For better modularity, you can pass num as an argument to the addNum function.

function addNum(num){
    return 2 + num
}
addNum(3); //5

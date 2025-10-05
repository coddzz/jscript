
// scope
let globalVar = "I’m global"; //global scope
// function scope
function testScope() {        //block scope using {}
  let localVar = "I’m local";
  console.log(globalVar); // works
  console.log(localVar);
}
testScope()
console.log(globalVar)
// console.log(localVar); // Error outside


// Hoisting
console.log(x); // undefined // Variable hoisting
var x = 5;   
console.log(x); 


sayHi(); // "Hello"  // Function hoisting 
function sayHi() {
  console.log("Hello");
}

// Bset Practices
// • Declare variables and functions before using them.
// • Always use let and const to create variables
// • Keep scope as local as possible
// • For better modularity, you can pass num as an argument to the addNum function.

function addNum(num){
    return 2 + num
}
addNum(3); //5

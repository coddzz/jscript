

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


console.log(x); // undefined // Variable hoisting
var x = 5;   
console.log(x); 


sayHi(); // "Hello"  // Function hoisting 
function sayHi() {
  console.log("Hello");
}



// Best Practices
// • Declare variables and functions before using them.
// • Always use let and const to create variables
// • Keep scope as local as possible
// • For better modularity, you can pass num as an argument to the addNum function.

function addNum(num){
    // let num = 3 ;
    return 2 + num
}
addNum(3); //5

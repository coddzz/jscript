
// Scope & Hoisting
// Global Scope, Function Scope & Block Scope
/*
Global Scope
 Variables and functions defined in the global scope can be accessed by any part of the program.
Function Scope
 These variables and functions can only be accessed within the function they were declared in.
Block scope
 Curly braces, {}, denote a code block. Variables declared within these curly braces cannot be accessed outside the curly braces.
*/

let globalVar = "I’m global";
function testScope() {
  let localVar = "I’m local";
  console.log(globalVar); // works
  console.log(localVar);
}

testScope()
console.log(globalVar)
// console.log(localVar); // Error outside

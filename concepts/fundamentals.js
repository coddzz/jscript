
// 1. Fundamentals

//Variables
var a = 10;   // function-scoped
let b = 20;   // block-scoped
const c = 30; // block-scoped, cannot be reassigned

// Data Types

let str = "Hello";    // String
let num = 42;         // Number
let isTrue = false;   // Boolean
let empty = null;     // Null
let notDefined;       // Undefined


// Complex

let obj = { name: "John", age: 25 }; // Object
let arr = [1, 2, 3];                 // Array
function greet() { return "Hi"; }    // Function

// Operators

console.log(5 + 2);  // 7
console.log(5 % 2);  // 1
console.log(5 == "5");   // true (loose equality)
console.log(5 === "5");  // false (strict equality)
console.log(typeof arr); // "object"
console.log(obj instanceof Object); // true

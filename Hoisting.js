
// let, const, var
// 5
console.log(x); // undefined 
var x = 5;      // let, const gives declaration error. var only works (undifined) before declaration.
console.log(x); 

sayHi(); // "Hello"  ,  works before declaration.

function sayHi() {
  console.log("Hello");
}



// scope ~ 
let user = "sarath" ;    //global scope

function addnum(){
    let user = "sarath";     // function scope 
    }                       // //block scope {}




// Hoisting
// Hoisting --  var, functions  -- call before declaration.



console.log(x); // variable hoisting //undefined 
var x;          // let and const not works.



sayhi();               // function hoisting
function sayhi(){       // call before declaration.
    console.log("hi")
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

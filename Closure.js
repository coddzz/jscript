
// A closure is when a function “remembers” the variables 
// from its outer scope, even after that scope is gone.

function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
counter(); // 1
counter(); // 2
console.log(counter()); // 3


// inner still has access to count even though outer finished running.


// • Use closures to protect data
function encapsulateData(){
    const user = {
        name: 'Chidera',
        age: 23
    }
    return function updateUserAge(){
        user.age++;
        return user.age;
    }
}

const updateHandler = encapsulateData();
const updatedAge = updateHandler(); // 24
console.log(user); // undefined
var user;
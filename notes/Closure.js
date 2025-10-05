
// Closure
/* A closure allows an inner function to access the variables and parameters of
 its outer (enclosing) function, even after the outer function has finished 
 executing. */

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


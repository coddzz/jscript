
// Closure

/* Use closures to protect data
   In programming, there are times you may want to protect 
   some variables from being accessed from outside of an object.
   This is where closures can be very useful. */

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


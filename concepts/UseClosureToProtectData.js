

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


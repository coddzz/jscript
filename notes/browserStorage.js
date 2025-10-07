import { LocalStorage } from 'node-localstorage';


// Browser storage
const localStorage = new LocalStorage('./scratch');

localStorage.setItem("name", "sara");
localStorage.setItem("username", "john");
console.log(localStorage.getItem("username")); // john

// Remove specific item
// localStorage.removeItem("name");

// Clear all stored data
// localStorage.clear();

localStorage.setItem("user", "Sara");
localStorage.setItem("age", "25");
localStorage.setItem("city", "Kochi");

console.log(localStorage.getItem("user")); // "Sara"
console.log(localStorage.getItem("age"));  // "25"
console.log(localStorage.getItem("city")); // "Kochi"


// Create an object
const person = {
  name: "Sara",
  age: 25,
  city: "Kochi"
};

// Store as JSON string
localStorage.setItem("person", JSON.stringify(person));

// Retrieve and convert back to object
const storedPerson = JSON.parse(localStorage.getItem("person"));
console.log(storedPerson.name); // "Sara"
console.log(storedPerson.age);  // 25
console.log(storedPerson);


if (localStorage.getItem("name")) {
  console.log("Name is stored:", localStorage.getItem("name"));
} else {
  console.log("No name found in localStorage");
}

// localStorage.clear(); // Deletes everything stored in localStorage
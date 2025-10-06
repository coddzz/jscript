import { LocalStorage } from 'node-localstorage';


// Browser storage
const localStorage = new LocalStorage('./scratch');

localStorage.setItem("name", "john");
console.log(localStorage.getItem("name")); // john

// Remove specific item
// localStorage.removeItem("name");
// Clear all stored data
// localStorage.clear();

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
console.log(storedPerson);   // { name: 'Sara', age: 25, city: 'Kochi' }


if (localStorage.getItem("name")) {
  console.log("Name is stored:", localStorage.getItem("name"));
} else {
  console.log("No name found in localStorage");
}
// Name is stored: john

//localStorage.clear(); // Deletes everything stored in localStorage
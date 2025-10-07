
import { LocalStorage } from 'node-localstorage';       
const localStorage = new LocalStorage('./scratch');  // import & const


localStorage.setItem("name", "john");
console.log(localStorage.getItem("name"));            // john


// Create an object
const person = {
  name: "Sara",
  age: 25,
  city: "Kochi"
};

// convert JSON string and store
localStorage.setItem("person", JSON.stringify(person));
// Retrieve and convert back to object
const storedPerson = JSON.parse(localStorage.getItem("person"));


console.log(storedPerson);        // { name: 'Sara', age: 25, city: 'Kochi' }
console.log(storedPerson.name);   // "Sara"


// localStorage.removeItem("name");
// localStorage.clear();             // Deletes everything stored in localStorage

// Objects & Arrays
// Object Literals & Methods

let person = {
  name: "Alice",
  greet() {
    console.log("Hi, I’m " + this.name);
  }
};
person.greet(); // Hi, I’m Alice



// Destructuring & Spread
let { name } = person; 
console.log(name); // Alice


let arr = [1, 2, 3];
let newArr = [...arr, 4, 5]; // Spread
console.log(newArr); // [1,2,3,4,5]

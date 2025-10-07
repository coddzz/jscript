
let notDefined;  
console.log(notDefined);   // undefined


console.log(typeof []);   // "object"
console.log({} instanceof Object);  // true



console.log("Scstript".includes("str"));  // true

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));

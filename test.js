
let notDefined;  
console.log(notDefined);   // undefined
console.log(typeof []);   // "object"
console.log({} instanceof Object);  // true
console.log("Scstript".includes("str"));  // true



// JavaScript Hacks < 3 
console.log(+ "42"); // 42

console.log(notDefined ?? 'default')  // "default" value only if null/undefined
let input = null;
console.log(input ?? "default value");



// Unique values
const nums = [1, 2, 3, 4, 4, 5];
const unique = [...new Set(nums)];
console.log(unique); // [1, 2, 3, 4, 5]



// Optional chaining
const user = { name: "Sara", address: { city: "Kochi" } };
console.log(user?.address?.city); // Kochi



// push(), pop(), slice(), splice()


let fruits = ["apple", "grapes", "mango"];
fruits.push("orange");   
console.log(fruits);                // [ 'apple', 'grapes', 'mango', 'orange' ]


// slice() -- Create a new array
let result = fruits.slice(0, 2);
console.log(result);                // [ 'apple', 'grapes' ]
console.log(fruits);                // [ 'apple', 'grapes', 'mango', 'orange' ]


fruits.pop();                       // remove last
console.log(fruits);                // [ 'apple', 'grapes', 'mango' ]


fruits.splice(0,1);                 // remove apple
console.log(fruits);                // [ 'grapes', 'mango' ]

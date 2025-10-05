
// Array Methods

let nums = [1, 2, 3, 4];
console.log(nums.map(n => n * 2));              // [2,4,6,8]
console.log(nums.filter(n => n % 2 === 0));     // [2,4]
console.log(nums.reduce((a, b) => a + b, 0));   // 10


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

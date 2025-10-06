
// .reduce()

/* The .reduce() method is used to combine all array elements
   into a single value — step by step. */

let num = [1,2,3,4];
console.log(num.reduce((a, b) => a + b, 0));   //10

// array.reduce((accumulator, currentValue) => { ... }, initialValue)

/*  Start → [1, 2, 3, 4]
    0 + 1 = 1
    1 + 2 = 3
    3 + 3 = 6
    6 + 4 = 10
  → Output = 10  */

// accumulator (a) → keeps track of the running total
// currentValue (b) → current element in the array
// initialValue → the starting value (here it’s 0)

let nums = [2, 3, 4];
let product = nums.reduce((a, b) => a * b, 1);
console.log(product);   // 24



let numss = [5, 8, 2, 10, 3];
let max = numss.reduce((a, b) => (a > b ? a : b));
console.log(max);      // 10


let cart = [
  { item: "Apple", price: 30 },
  { item: "orange", price: 40 },
  { item: "grapes", price: 40 }
];

let total = cart.reduce((sum, fruit) => sum + fruit.price, 0);
console.log(total); // 110

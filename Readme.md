# javascript Concepts < 3
  This repository is created to help developers master interesting JavaScript concepts.
  Explore, practice code and upgrade your skills. - learn, build, and grow 🌱
  Happy coding! 😊

# Scope & Hoisting

# Global Scope
 Variables and functions defined in the global scope can be accessed by any part of the program.

# Function Scope
 These variables and functions can only be accessed within the function they were declared in.

# Block scope
 Curly braces, {}, denote a code block. Variables declared within these curly braces cannot be accessed outside the curly braces.

```js
let globalVar = "I’m global";
function testScope() {
  let localVar = "I’m local";
  console.log(globalVar); // works
  console.log(localVar);
}

testScope()
console.log(globalVar)
// console.log(localVar); // Error outside
```


# Variable hoisting.
```js
console.log(x); //undefined

var x = 4
// if use let shows ReferenceError: Cannot access 'x' before initialization
```
We can't use let and const. This is because var is not block-scoped, meaning that the var-declared variable can be referred to anywhere in its scope regardless of the position of the variable's declaration.


# Function hoisting 

```js
console.log(addNums(1,3)); // 4

function addNums(a,b){
return a + b;
}
```

it's important to know that only function declarations are hoisted. Function expressions are not hoisted.

```js
console.log(addNums(1,3)); // ReferenceError: cannot access "addNums" before initialization
const addNums = function (a,b) {
return a + b;
}
```


# Import hoisting

```js
// module.js
export const myValue = 10;

// main.js
console.log(myValue); // This works due to import hoisting
import { myValue } from './module.js';
```


# Class hoisting 

```js 
new Car(); // ReferenceError: cannot access "Car" before initialization
class Car{}
```
you cannot accessed a class before its declaration.


# Best practices
# @ Keep scope as local as possible
# @ You should keep your scope local as possible.
# @ For better modularity, you can pass num as an argument to the addNum function.

```js
function addNum(num){
    return 2 + num
}
addNum(3); //5
```


# Closure
A closure allows an inner function to access the variables and parameters of its outer (enclosing) function, even after the outer function has finished executing. 

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
counter(); // 1
counter(); // 2
console.log(counter()); // 3
```


# • Use closures to protect data
In programming, there are times you may want to protect some variables from being accessed from outside of an object. This is where closures can be very useful.

```js
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
```


# • Declare variables and functions before using them.
This helps to avoid unpredictability and unwanted bugs in your code.

# • Always use let and const to create variables
They remove the unpredictable code behavior that comes with using var. There is almost no reason to use var to declare variables in modern JavaScript.

# Conclusion
In summary, scopes determine where a variable can be accessed.
Scope can be divided into three: global, local, and block scopes.
Closures are functions inside a function. Closure functions have access to parent function variables, even after the parent function has returned. Closure is a crucial part of asynchronous JavaScript.
Hoisting makes variables accessible even before their creation.
Remember to adhere to best practices when working with closures and hoisting. Declaring variables before usage and using closures to encapsulate data can help to prevent code unpredictability and protect private data.

# callback();
A callback function is a function that is passed to another function as an argument and is executed after some operation has been completed.
# concat();
concat() : add or duplicate some to exists variable or string.
a = "hello"
console.log(a.concat(a));  output: hellohello
# Array.isArray()
check if an object is an array or not.
console.log(Array.isArray(["hello,"world"]) === true)  // true
console.log(Array.isArray("hello","words") === true)   // false
# .split()  .join()
.split("") : split the string to an array using by given letter
.join("") : join the string to an array using by given letter
# .reverse()
reverse the words and arrays.
console.log(array.reverse());   // [ 'JavaScript', 'to', 'Welcome' ]
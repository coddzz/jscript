
// Math. function
console.log(parseInt("10") === 10) // true  -- string convert to int
console.log(Math.max(20, 50))  // 50  -- maximum value
console.log(Math.min(1, 7, 3))  // 1  -- minimum value
console.log(Math.abs(-5))  // 5   -- Absolute value
console.log(Math.round(4.9))  // 5   -- Round to nearest
console.log(Math.floor(4.9))  // 4  -- Round down
console.log(Math.ceil(4.1))  // 5  -- Round up
console.log(Math.pow(3, 4))  // 81 -- 3 to the power of 4
console.log(Math.sqrt(121))  // 11 --  square root


console.log(Math.trunc(4.9))  // 4  -- Remove decimal part
console.log(Math.sign(-8))    // -1 -- shows sign of number


console.log(Math.random())  // eg: 0.540141500439622  -- random number(0-1)
let randomNum = Math.floor(Math.random()*10) + 1;
console.log(randomNum); // eg: 3  -- random number(1-10)


// calculate area of a circle
let r = 5;
let area = Math.PI * Math.pow(r, 2);
console.log(area);  // 78.53981633974483 -- pi*r*^2


// calculate maximum or minimum in an array
let nums = [ 2, 3, 9, 6];
console.log(Math.max(...nums));    // 9
console.log(Math.min(...nums));    // 2
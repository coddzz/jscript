
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

// inner still has access to count even though outer finished running.
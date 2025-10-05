
// A closure is when a function “remembers” the variables 
// from its outer scope, even after that scope is gone.

function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3
counter(); // 4

// inner still has access to count even though outer finished running.
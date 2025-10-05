const add = (a, b) => a + b;

console.log(add(2, 3)); // 5

// "this" example
const obj = {
  name: "JS",
  regular: function () {
    console.log("Regular:", this.name);
  },
  arrow: () => {
    console.log("Arrow:", this.name);
  }
};

obj.regular(); // Regular: JS
obj.arrow();   // Arrow: undefined (or window.name)

// Arrow functions are a shorter way to write functions,
// and they don’t bind their own this (they use the parent’s this).
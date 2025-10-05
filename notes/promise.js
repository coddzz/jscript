/* Promises work in JavaScript, along with the use of
 .then(), .catch(), and .finally(). */

let promise = new Promise((resolve, reject) => {
  let success = true;
  success ? resolve("Done!") : reject("Error!");
});

promise
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => console.log("Finished"));

// .then() → runs when the promise is resolved
// .catch() → runs if the promise is rejected
// .finally() → always runs no matter what (after .then() or .catch()).
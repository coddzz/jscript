
/* async function
   When you declare a function with the async keyword:
   async function fetchData() { ... }
   it always returns a Promise — even if you don’t explicitly use Promise. */

/* An asynchronous (async) function is a special kind of JavaScript function 
   that runs operations in the background (without blocking other code) and 
   returns a Promise.

   It allows you to wait for asynchronous tasks (like fetching data from a 
   server or reading a file) without freezing the rest of your program.*/

   
async function fetchData() {
    return "Data Loaded!"  
    // return Promise.resolve("Data loaded!");
}

fetchData().then(console.log);
// is equivalent to
// fetchData().then(data => console.log(data));

/* async function
   When you declare a function with the async keyword:
   async function fetchData() { ... }
   it always returns a Promise — even if you don’t explicitly use Promise. */


async function fetchData() {
    return "Data Loaded!"  
    // return Promise.resolve("Data loaded!");
}

fetchData().then(console.log);
// is equivalent to
// fetchData().then(data => console.log(data));

// async function it always returns a Promise

/* It allows you to wait for asynchronous tasks (like fetching data from a 
   server or reading a file) without freezing the rest of your program. */

async function fetchData() {
    return "Data Loaded!"  
    // return Promise.resolve("Data loaded!");
}

fetchData().then(console.log);
// is equivalent to
// fetchData().then(data => console.log(data));
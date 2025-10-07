
// async function it always returns a Promise

async function fetchData() {
    return "Data Loaded!"  
    // return Promise.resolve("Data loaded!");
}

fetchData().then(console.log);
// is equivalent to
// fetchData().then(data => console.log(data));

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())              // promise 1 -- res
  .then(data => console.log(data))      // promise 2 --  data
  .catch(err => console.log(err));


  
  /* fetch()  -->  res + data using '.then'
              -->  error using '.catch'      */

        
  /* output
  {
  userId: 1,
  id: 1,
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\n' +
      'suscipit recusandae consequuntur expedita et cum\n' +
      'reprehenderit molestiae ut ut quas totam\n' +
      'nostrum rerum est autem sunt rem eveniet architecto'
  } */



// fetch Url using async function

async function getPost() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      // Response Object
    const data = await res.json();      // JSON Data using res.json()
    console.log(data);      // console.log(data)
      
  } catch (err) {
    console.error(err);
  }
}

getPost();


/* --------------------------------------------------------------------------
fetch()  →  Response Object  →  res.json()  →  JSON Data  →  console.log(data)
                     ↓                         ↓
               (Promise 1)              (Promise 2)
-----------------------------------------------------------------------------  */
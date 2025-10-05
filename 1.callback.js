
/* A callback function is a function that is passed to another function as an
 argument and is executed after some operation has been completed. */
// callback();

function greet(name, callback){
    console.log("hello "+name)
    callback()
}

greet("Sarath", ()=> console.log("Callback Function"))

// hello Sarath
// Callback Function


// more examples
var arr = [1,2,3,4];
a=1;

async function modifyArray(a, callback){
    a = a + 1;
    console.log(a);
    callback();
}

modifyArray(a, function(){
    console.log("Array has been Modified : ",arr)
})

modifyArray(a, function(){
    arr.push(5);
    console.log("Array has been Modified : ",arr)
})

modifyArray(a, function(){
    arr.push(6);
    console.log("Array has been Modified : ",arr)
})


// 2
// 2
// 2
// Array has been Modified :  [ 1, 2, 3, 4 ]
// Array has been Modified :  [ 1, 2, 3, 4, 5 ]
// Array has been Modified :  [ 1, 2, 3, 4, 5, 6 ]

function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function afterGreet() {
  console.log("How are you?");
}

greet("Sam", afterGreet);

// Output:
// Hello Sam
// How are you?

/* A callback function is a function that is passed to another function as an
 argument and is executed after some operation has been completed. */

var arr = [1,2,3,4];
a=1;

async function modifyArray(a, callback){
    a = a + 1;
    await console.log(a);
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
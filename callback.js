/* A callback function is a function that is passed to another function as an
 argument and is executed after some operation has been completed. */


 var arr = [1,2,3,4];

async function modifyArray(arr, callback){
    await arr.push(100);
    callback();
}

modifyArray(arr, function(){
    console.log("Array has been Modified : ",arr)
})

console.log(arr);
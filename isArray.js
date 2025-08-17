// How to check if an object is an array or not?

var arrayList =[1,2,3];

//console.log(Object.prototype.toString.call(arrayList));

if (Object.prototype.toString.call(arrayList) === '[object Array]'){
    console.log("Array!!");
} else {
    console.log("Not an Array!")
}


//console.log(Array.isArray(arrayList));

if (Array.isArray(arrayList) === true){
    console.log("Array!!");
} else {
    console.log("Not an Array!")
}

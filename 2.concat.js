
//duplicate Array  //concat() : add some to exists!
//method 1
function duplicate(arr){
    console.log( arr.concat(arr));
}

duplicate([4,5,6,7,8])          //[ 4, 5, 6, 7, 8, 4, 5, 6, 7, 8 ]


names = ['hello','world'];      //[ 'hello', 'world', 'hello', 'world' ]
duplicate(names);


//method 2
a = "hello"
console.log(a.concat(a));       //hellohello


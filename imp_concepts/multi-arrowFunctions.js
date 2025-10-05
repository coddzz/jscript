
// multi-arrow functions
const addNum = (x,y) => (z) => console.log(x+y+z);
addNum(3,2)(5)  //10



// multi-arrow functions
const functionOuter = () =>{  // function 1
    let count = 2 ;  
    return functionInner = () =>{  // function 2
    count = count + 5;
    return count;
}}
console.log(functionOuter()());  // 7



// simplified
const Fn = (count = 2) => () =>{ count++; return count; }
console.log(Fn()());  //3

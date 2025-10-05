
// multi-arrow functions
const fn = (x,y) => (z) => console.log(x+y+z);
fn(3,2)(5)  //10



// multi-arrow functions
const functionOuter = () =>{  // function 1
    let count = 2 ;  
    return functionInner = () =>{  // function 2
    count = count + 5;
    return count;
}}
console.log(functionOuter()());  // 7



// simplified
const outerFn = (count = 2) => () =>{ count++; return count; }
console.log(outerFn()());  //3

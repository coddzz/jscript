// Write a "mul" function which will properly when invoked as below syntax
//console.log(mul (2) (3) (4)); 
// Output: 24

function mul (x){
    return function (y){
        return function (z){
            return x * y * z ;
        };
    };
}

console.log(mul (2)(3)(4));
console.log(`4 x 3 x 4 = ${mul (4)(3)(4)}`);
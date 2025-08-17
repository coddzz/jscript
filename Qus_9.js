/* You can create a closure to keep the value passed to the function
 "createBase" even after the inner function is returned. The inner function
 that is being returned is created within an outer function, making it a
 closure, and it has access to the variables within the outer function, in this
 case the variable "baseNumber". */

function createBase(baseNumber){
    return function(N){
        console.log( baseNumber + N);
    }
}

var addSix = createBase(6);
addSix(10);
addSix(23);

let jsonStr = '{"name":"Bob","age":30}';

let obj2 = JSON.parse(jsonStr);   // String → Object
console.log(obj2);
console.log(obj2.name); // Bob


let str2 = JSON.stringify(obj2);  // Object → String
console.log(str2);
console.log(str2.name); // undefined



let str = "Javascript";

console.log(str.toUpperCase())              // .toUpperCase()  --  JAVASCRIPT
console.log(str.toLowerCase())              // .toLowerCase()  --  javascript
console.log(str.includes("script"))         // .includes()     --  true (case-sensitive)
console.log(str.startsWith("Java"))         // .startsWith()   --  true
console.log(str.endsWith("script"))         // .endsWith()     --  true
console.log(str.indexOf("s"))               // .indexOf()      --  4
console.log(str.indexOf("z"))               // .indexOf()      --  -1 ( not available)


console.log(str.slice(0,4))                 // .slice()        --  Java
console.log(str.substring(4,10))            // .substring()    --  script

console.log(str.replace("Java", "Type"))    // .replace()      --  Typescript

console.log(str.split("a"))                 // .split()    --  [ 'J', 'v', 'script' ]
console.log("a,b,c".split(","))             // .split()    --  [ 'a', 'b', 'c' ]
console.log("  hi  ".trim())                // .trim()     --  hi (avoid spaces)

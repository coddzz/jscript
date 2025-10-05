var string = "Welcome to JavaScript!!"

var reverseSentence = reverseBySeparator(string,"");
console.log(reverseSentence);

function reverseBySeparator(string, separator){

    return string.split(separator).reverse().join(separator);
}

//.split() //.join() // .reverse()
//.split(seprator) : split the string to an array using by given letter.
//.join(seprator)  : join the array to string back.
//.reverse()    : reverse the array

var reverseEachWord = reverseBySeparator(reverseSentence," ");
console.log(reverseEachWord);


console.log(string.split(" "));     // [ 'Welcome', 'to', 'JavaScript!!' ]

var array = ["Welcome","to","JavaScript"]
console.log(array.join(" - "));       // Welcome - to - JavaScript
console.log(array.reverse());       // [ 'JavaScript', 'to', 'Welcome' ]

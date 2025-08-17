// How to empty an array in JavaScript ?

var arrayList = ['A','B','C','D','E']

//method 1
arrayList= [];

//method 2
arrayList.length = 0;

//method 3
while (arrayList.length){
    arrayList.pop();
}

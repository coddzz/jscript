
// callback();
function greet(name, callback){
    console.log("hello "+name)
    callback()
}

greet("Sarath", ()=> console.log("Callback Function"))

// hello Sarath
// Callback Function
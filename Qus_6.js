// Q6: Implement enqueue(add) and dequeue(remove) using only two stacks

var stackInput = [];
var stackOutput = [];

function enqueue(stackInput, item){
    return stackInput.push(item);
}

function dequeue(stackInput, stackOutput){
    if (stackOutput.length <= 0){
        while (stackInput.length > 0){
            var elementToOutput = stackInput.pop();
            stackOutput.push(elementToOutput);
        }
    }
    return stackOutput.pop();
}

enqueue(stackInput,'hello')
enqueue(stackInput,'world')
console.log(stackInput)
console.log(stackOutput)
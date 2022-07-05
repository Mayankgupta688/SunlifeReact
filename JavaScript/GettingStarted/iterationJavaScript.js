// Iteration in JavaScript

var arrayData = [10, 20, 30, 40, 50]

// For Loop, While Loop, do While, forEach, for of, recursion, map

arrayData[0] = arrayData[0] + 10

// Immutibility

arrayData = arrayData.map(function(value, index) {
    console.log(value)
    console.log(index)
    return value + 10
})

var data = {
    name: "Mayank",
    age: 10
}

data = {
    ...data,
    name: "Anshul"
}

debugger;


// Higher Order Functions.
function abc() {
    function efg() {

    }

    return efg;
}
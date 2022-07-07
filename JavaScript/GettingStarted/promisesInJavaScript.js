var data = Math.floor(Math.random() * 100)

var myPromise = new Promise((resolve, reject) => {
        if(data % 2 == 0) {
            resolve("number is even...")
        } else {
            reject("number is Odd...")
        }
})

debugger;

myPromise.then(function successFunction(data) {
    console.log(data);
}, function failureFunction(data) {
    console.log("Failure: " + data);
})


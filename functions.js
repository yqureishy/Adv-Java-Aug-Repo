function addNumbers(x, y) {
    return x + y
};

console.log(addNumbers(5, 4));

let multiplyNumbers = (x, y) => {
    return x * y
}

console.log(multiplyNumbers(2, 3));

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved")
    }, 2000)
})

const asyncFunction = async () => {
    console.log("Before Promise")
    console.log(await myPromise)
    console.log("After Promise")
}

console.log("Before Async function")
asyncFunction();
console.log("After Async function")
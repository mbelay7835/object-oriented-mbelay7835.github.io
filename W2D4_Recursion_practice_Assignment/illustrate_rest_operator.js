"use strict";

///////////////////////////////////////rest in function call.

function addNumbers(...arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let total = addNumbers(3, 2, 4, 6);
console.log(total);

////////////////////////////////////////////// rest in destructuring assignment.

let [num1, num2, ...rest] = [10, 20, 30, 40];

console.log(rest)//[30, 20]
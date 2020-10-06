"use strict";

//Write your own version of reduce.

function myReduce(arr, redFunc, init) {

    let accum = init;
    for (let i = 0; i < arr.length; i++) {
        accum = redFunc(accum, arr[i])
    }

    return accum
}

function reduced(accum, value) {
    return accum + value;
}

let inputVal = [3, 5, 20, 8, 6];
console.log(myReduce(inputVal, reduced, 0))// 42
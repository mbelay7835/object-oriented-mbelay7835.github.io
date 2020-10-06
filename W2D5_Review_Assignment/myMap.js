"use strict";

/**
 Write your own version of map. 
 Write a function, myMap that takes 2 arguments, an array and a function to apply to the array.
 ld return a new array of the same size with the function applied to each element of the input array. 
 It should not change the input array.
 */

function myMap(arr, func) {

    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(func(arr[i]))
    }
    return newArr
}

function mapped(value) {
    return value * 3
}

let input = [2, 3, 4, 6];
console.log(myMap(input, mapped)) //[6, 9, 12, 18]
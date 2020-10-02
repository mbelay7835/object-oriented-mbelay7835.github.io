"use strict";

let arr = [3, 6, 9, 20];
let arr2 = [4, 10, 20];
let obj = { x: 1, y: { a: 1, b: 2 } };
let obj1 = { x1: 2, y1: { a: 2, b: 3 } };


let copyArry = [...arr];  //Copy array using spread operator
let concatArr = arr.concat(arr2);  //combine arrays using concat method
let concatArr1 = [...arr, ...arr2];  //combine arrays using spread operator
let min = Math.min(...arr);  //Find minimum value in the given array usin spread operator.
let max = Math.max(...arr);  //Find maximum value in the given array usin spread operator.
let combineObj = { ...obj, ...obj1 };  //combine objects using spread operator

console.log(copyArry);
console.log(concatArr);
console.log(concatArr);
console.log(min);
console.log(max);
console.log(combineObj);
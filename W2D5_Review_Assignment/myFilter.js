"use strict";

/**
 Write your own version of filter. 
 Write a function, myFilter that takes 2 arguments, an array and a function to apply to the array.
 */

function myFilter(arr, func) {
    let filtArr = [];
    for (let i = 0; i < arr.length; i++) {
      let value = func(arr[i]);
      if (value) {
        filtArr.push(func(arr[i]))
      }
  
    }
    return filtArr;
  }
  
  function filtered(value) {
    if (value % 2 === 0) {
      return value;
    } 
  }
  
  let arr = [2, 4, 3, 6, 9, 20];
  console.log(myFilter(arr, filtered)) //[2, 4, 6, 20]
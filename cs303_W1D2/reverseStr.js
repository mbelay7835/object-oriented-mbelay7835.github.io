/* eslint-disable id-length */
"use strict";
/**
 * Returns reversed string.
 *
 * @param {string} str input string.
 * @return {string} reversed string.
 */

function reverse(str) {
    debugger;
    let arr = str.split("");
      let i = 0;
      let j = arr.length - 1;
      while (i < j) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
  
          i++;
          j--
      }
      return arr.join("");
  }
  
  




/* eslint-disable id-length */
"use strict";

////////////////////////////////////////////////////////////////sum
/**
 * Returns sum of numbers in the array.
 *
 * @param {object} arr input array.
 * @return {number} sum of numbers in the array.
 */

function sum(arr) {
    debugger;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}

////////////////////////////////////////////////////////////////////////max
/**
 * Returns maximum number from parameters.
 *
 * @param {number} n1 The number to compare.
 * @param {number} n2 The number to compare.
 * @param {number} n3 The number to compare.
 * @return {number} maximum number from parameters.
 */
function max3(n1, n2, n3) {

    debugger;
    if (n1 > n2 && n1 > n3) {
        return n1;
    } else if (n2 > n1 && n2 > n3) {
        return n2;
    } else {
        return n3;
    }
}

///////////////////////////////////////////////////////////////////// Find Longest
/**
 * Returns longest length of elements in array.
 *
 * @param {object} arr input array.
 * @return {number} longest length of elements in array.
 */

function findLongestWord(arr) {
    debugger;
    let longest_len = arr[0].length;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest_len) {
            longest_len = arr[i].length;
        }
    }
    return longest_len;
}

//////////////////////////////////////////////////////////////////////Reverse
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
  
  ///////////////////////////////////////////////////////////////////////isVowel
  /**
 * Returns true if the value is vowel otherwise false.
 *
 * @param {string} str input value.
 * @return {boolean} true if the value is vowel otherwise false.
 */

function isVowel(str) {
    debugger;
    let vowel = "aioue";
    str = str.toLowerCase();
    return (vowel.indexOf(str) !== -1)
}
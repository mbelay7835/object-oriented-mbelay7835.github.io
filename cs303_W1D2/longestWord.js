/* eslint-disable id-length */
"use strict";
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
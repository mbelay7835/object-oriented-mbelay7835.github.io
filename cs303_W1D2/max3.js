/* eslint-disable id-length */
"use strict";
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


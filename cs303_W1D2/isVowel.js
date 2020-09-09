/* eslint-disable id-length */
"use strict";
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
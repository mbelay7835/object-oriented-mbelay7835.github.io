"use strict";

///////////////////////Can i add a string property
let str = "Hello";

str.test = 5; // (*)

console.log(str.test);//An error (strict property)

//////////////////////////////////////////////////Sum numbers from the visitor.

let num1 = parseFloat(prompt("The first number?", ""));
let num2 = parseFloat(prompt("The second number?", ""));

console.log(num1 + num2);

/////////////////////////////Repeat until the input is a number (use the mocha test in VSCode from the sandbox)
/**
 * Read number from the user.
 * @returns {number} Display number
 */
function readNumber() {
    let num;

    do {
        num = prompt("Enter a number please?", 0);
    } while (!isFinite(num));

    if (num === null || num === " ") return null;

    return +num;
}

console.log(`Read: ${readNumber()}`);

///////////////////////////////An occasional infinite loop.

let i = 0;
while (i < 11) {
    i += 0.2;
    if (i > 9.8 && i < 10.2)
        console.log(i);
}

/////////////////////////////A random number from min to max
/**
 * Display random number.
 * @param {Number} min input minimum number
 * @param {Number} max input max number
 * @returns {Number} Random number
 */
function random(min, max) {
    return min + Math.random() * (max - min);
}

console.log(random(1, 5));

//////////////////////////A random integer from min to max
/**
 * Display random integer.
 * @param {Number} min input minimum number
 * @param {Number} max input max number
 * @returns {Number} Random integer
 */
function randomInteger(min, max) {

    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

console.log(randomInteger(1, 3));

//////////////////////////Uppercase the first character.
/**
 * Display string with first uppercase letter.
 * @param {String} str input string
 * @returns {string} string with first uppercase letter
 */
function ucFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}

console(ucFirst("mequanint")); // Mequanint

////////////////////////////////Check for spam
/**
 * Display true false value
 * @param {String} str input string
 * @returns {boolean} true false value
 */
function checkSpam(str) {
    let lowerStr = str.toLowerCase();

    return lowerStr.includes("viagra") || lowerStr.includes("xxx");
}

console.log(checkSpam("buy ViAgRA now"));// true

///////////////////////////////////Truncate the text
/**
 * Display truncated text.
 * @param {string} str input text
 * @param {Number} maxlength input maximum text length
 * @returns {string} truncated text
 */
function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + "…" : str;
}
console.log(truncate("Hello", 10));

///////////////////////////////////Extract the money
/**
 * Display extracted value
 * @param {String} str input string
 * @returns {Number} Extracted value
 */
function extractCurrencyValue(str) {
    return +str.slice(1);
}
console.log(extractCurrencyValue("$20"));//20

//////////////////////////////////////A maximal subarray (use the mocha test in VSCode from the sandbox)
/**
 * Display the contiguous subarray of arr with the maximal sum of items
 * @param {object} arr input array of numbers.
 * @returns {Number} return the contiguous subarray of arr with the maximal sum of items
 */
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;

    for (let item of arr) { // for each item of arr
        partialSum += item; // add it to partialSum
        maxSum = Math.max(maxSum, partialSum); // remember the maximum
        if (partialSum < 0) partialSum = 0; // zero if negative
    }

    return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // 3

//////////////////////////////////////Translate border-left-width to borderLeftWidth
/**
 * Display translated string
 * @param {string} str input string text.
 * @returns {string} return translated string
 */
function camelize(str) {
    return str.split("-").map(
        // capitalizes first letters of all array items except the first one
        // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
        .join(""); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}

console.log(camelize("background-color"));//'backgroundColor'
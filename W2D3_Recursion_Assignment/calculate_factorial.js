"use strict";

//////////////// Calculate factorial using recursive call.

function factorial(n) {

    if (n === 1) return 1;
    return n * factorial(n - 1);
}

let value = 5;
console.log(factorial(value));
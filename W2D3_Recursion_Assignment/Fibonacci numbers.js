"use strict";
////////////////////////// Fibonacci numbers

function fib(n) {
    
    if (n < 2) return n;
    return (fib(n - 1) + fib(n - 2));
}
let input = 8;
console.log(fib(input));//21
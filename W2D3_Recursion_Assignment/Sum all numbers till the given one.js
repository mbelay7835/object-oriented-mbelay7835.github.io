"use strict";
////////////////////////////////////////////Sum all numbers till the given one.

//////////////////////////Using a for loop

function sumTo(n) {

    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    return sum;
}
let given = 100;
console.log(sumTo(given))//5050


/////////////////////////Using a recursion

function sumTo_1(n) {

    if (n === 1) return 1;
    return n + sumTo_1(n - 1);
}
let n = 100;
console.log(sumTo_1(n));//5050

/////////////////////////////////Using the arithmetic progression formula.

function sumTo(n) {
    let total = n * (n + 1) / 2;
    return total;
}
let inputs = 100;
console.log(sumTo(inputs));//5050
"use strict";

function sum(num1) {

    return function (num2) {
        return num1 + num2
    };
}

console.log(sum(4)(16)); // 20
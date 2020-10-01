"use strict";

function sumNum(arr) {
    let addNum = arr.reduce((total, value) => total + value, 0);
    return addNum;
}
let numArray1 = [300, 51, 2];
let totalSum = sumNum(numArray1);
console.log(totalSum);

////////////////////////////////////Test.

describe("sumNum", function () {

    it("returns the total sum of values", function () {

        let numArray1 = [300, 51, 2];
        let totalSum = sumNum(numArray1);

        assert.equal(totalSum, 353);
    });
});
"use strict";

function findMaxValue(arr) {
    let maxVal = arr.reduce((max, value) => max > value ? max : value, 0);
    return maxVal;
}
let numArray3 = [300, 350, 200];
let max = findMaxValue(numArray3);
console.log(max);

////////////////////////////////////Test.

describe("findMaxValue", function () {

    it("returns maximum values of the array", function () {

        let numArray3 = [300, 350, 200];
        let max = findMaxValue(numArray3);

        assert.equal(max, 350);
    });
});
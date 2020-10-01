"use strict";

function averageNum(arr) {
    let addNum = arr.reduce((total, value) => total + value, 0) / arr.length;
    return addNum;
}
let numArray2 = [300, 51, 2];
let totalAverage = averageNum(numArray2);
console.log(totalAverage);

////////////////////////////////////Test.

describe("averageNum", function () {

    it("returns the average values of the array", function () {

        let numArray2 = [300, 75, 75];
        let totalAverage = averageNum(numArray2);

        assert.equal(totalAverage, 150);
    });
});
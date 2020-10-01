"use strict";

function filterEvenNum(arr) {
    let filtered = arr.filter(element => element % 2 === 0);

    return filtered
}

let num_Array = [300, 51, 2, 20];
let filtered = filterEvenNum(num_Array);
console.log(filtered);

////////////////////////////////////Test.

describe("filterEvenNum", function () {

    it("returns even numbers from the given array of elements", function () {

        let num_Array = [300, 51, 2, 20];
        let filtered = filterEvenNum(num_Array);

        assert.deepEqual(filtered, [300, 2, 20]);
    });
});
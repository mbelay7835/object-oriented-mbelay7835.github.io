"use strict";

function findFirstEven(arr) {

    let filtered = arr.find(element => element % 2 === 0);

    return filtered
}

let array1 = [3, 5, 20, 40];
let firstEven = findFirstEven(array1);
console.log(firstEven);

////////////////////////////////////Test.

describe("findFirstEven", function () {

    it("returns the first even numbers from the given array of elements", function () {

        let given = [3, 5, 20, 40];
        let firstEven = findFirstEven(given);

        assert.equal(firstEven, 20);
    });
});
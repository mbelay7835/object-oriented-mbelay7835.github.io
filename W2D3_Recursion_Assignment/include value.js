"use strict"

function includeValue(arr, n) {

    return arr.includes(n);
}
let num = 20
let arrrr = [32, 5, 20, 40];
let isInclude = includeValue(arrrr, num);
console.log(isInclude);

////////////////////////////////////Test.

describe("includeValue", function () {

    it("returns true if the given value include in the array ", function () {

        let n2 = 20
        let given = [32, 5, 20, 40];
        let isInclude = includeValue(given, n2);

        assert.equal(isInclude, true);
    });

    it("returns false if the given value not include in the array", function () {

        let n1 = 9
        let given1 = [32, 5, 20, 40];
        let isInclude = includeValue(given1, n1);

        assert.equal(isInclude, false);
    });
});
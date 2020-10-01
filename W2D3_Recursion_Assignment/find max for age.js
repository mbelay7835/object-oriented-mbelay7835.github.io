"use strict";

function findMaxAge(arr) {
    let maxAge = arr
        .map(element => element.age)
        .reduce((max, value) => (max > value ? max : value), 0);
    return maxAge;
}
let peopleArray1 = [{ name: "Sam", age: 15 }, { name: "William", age: 20 }, { name: "Lucy", age: 3 }]
let maximumAge = findMaxAge(peopleArray1);
console.log(maximumAge);

////////////////////////////////////Test.

describe("findMaxAge", function () {

    it("returns maximum age of the given array", function () {

        let peopleArray1 = [{ name: "Sam", age: 19 }, { name: "William", age: 20 }, { name: "Lucy", age: 18 }]
        let maximumAge = findMaxAge(peopleArray1);

        assert.equal(maximumAge, 20);
    });
});
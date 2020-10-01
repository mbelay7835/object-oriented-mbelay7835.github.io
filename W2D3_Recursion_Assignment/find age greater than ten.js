"use strict";

function findAgeGreaterThanTen(arr) {
    let filtered = arr.find(element => element.age > 10);

    return filtered
}

let people_Array2 = [
    { name: "Sam", age: 5 },
    { name: "William", age: 20 },
    { name: "Lucy", age: 9 },
    { name: "Lucy", age: 100 }
]
let findAgeGreaterTen = findAgeGreaterThanTen(people_Array2);
console.log(findAgeGreaterTen);

//////////////////////////////////////////////////////////////////Test.
describe("findAgeGreaterThanTen", function () {

    it("returns the first value of array that has age greater than ten", function () {

        let people_Array2 = [
            { name: "Sam", age: 5 },
            { name: "William", age: 20 },
            { name: "Lucy", age: 9 },
            { name: "Lucy", age: 100 }
        ]
        let findAgeGreaterTen = findAgeGreaterThanTen(people_Array2);

        assert.deepEqual(findAgeGreaterTen, { name: "William", age: 20 });
    });
});
"use strict";

function ageGreaterThanTen(arr) {

    let filtered = arr.filter(element => element.age > 10);

    return filtered
}

let people_Array1 = [
    { name: "Sam", age: 5 },
    { name: "William", age: 20 },
    { name: "Lucy", age: 9 },
    { name: "Lucy", age: 100 }
]
let ageGreaterTen = ageGreaterThanTen(people_Array1);
console.log(ageGreaterTen);

////////////////////////////////////Test.

describe("ageGreaterThanTen", function () {

    it("returns value of array that has age greater than ten", function () {

        let people_Array1 = [
            { name: "Sam", age: 5 },
            { name: "William", age: 20 },
            { name: "Lucy", age: 9 },
            { name: "Lucy", age: 100 }
        ]
        let ageGreaterTen = ageGreaterThanTen(people_Array1);

        assert.deepEqual(ageGreaterTen, [
            { name: "William", age: 20 },
            { name: "Lucy", age: 100 }
        ]);
    });
});
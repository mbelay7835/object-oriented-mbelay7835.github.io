"use strict";

function averageAge_of_evenNum(arr) {
    let filtered = arr
        .map(element => element.age)
        .filter(element => element % 2 === 0);

    let averageAge = filtered.reduce((max, value) => (max + value), 0);

    return averageAge / filtered.length;
}

let peopleArray2 = [
    { name: "Sam", age: 15 },
    { name: "William", age: 20 },
    { name: "Lucy", age: 30 },
    { name: "Lucy", age: 100 }
]
let averAge = averageAge_of_evenNum(peopleArray2);
console.log(averAge);

////////////////////////////////////Test.

describe("averageAgeOfEvenNum", function () {

    it("returns the average age of people with even number ages", function () {

        let peopleArray2 = [
            { name: "Sam", age: 15 },
            { name: "William", age: 20 },
            { name: "Lucy", age: 30 },
            { name: "Lucy", age: 100 }
        ]
        let averAge = averageAge_of_evenNum(peopleArray2);

        assert.equal(averAge, 50);
    });
});
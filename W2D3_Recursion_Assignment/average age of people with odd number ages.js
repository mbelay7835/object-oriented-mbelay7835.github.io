"use strict";

function averageAge_of_oddNum(arr) {
  let filtered = arr
    .map(element => element.age)
    .filter(element => element % 2 !== 0);

  let averageAge = filtered.reduce((max, value) => (max + value), 0);

  return averageAge / filtered.length;
}

let peopleArray3 = [
  { name: "Sam", age: 15 },
  { name: "William", age: 20 },
  { name: "Lucy", age: 17 },
  { name: "Lucy", age: 31 }
]
let averOddAge = averageAge_of_oddNum(peopleArray3);
console.log(averOddAge);

////////////////////////////////////Test.

describe("averageAgeOfOddNum", function () {

  it("returns the average age of people with odd number ages", function () {

    let peopleArray3 = [
      { name: "Sam", age: 15 },
      { name: "William", age: 20 },
      { name: "Lucy", age: 17 },
      { name: "Lucy", age: 31 }
    ]
    let averOddAge = averageAge_of_oddNum(peopleArray3);

    assert.equal(averOddAge, 21);
  });
});
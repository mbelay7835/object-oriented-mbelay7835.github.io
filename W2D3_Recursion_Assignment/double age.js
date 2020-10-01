"use strict";

function mapped(element){
      element.age = element.age*2;
      return element;
    }

function doubleAge(arr){
  // I called function mapped and used as an argument.
    let double = arr.map(mapped);
    return double;
}

let peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}]
let doubledAge = doubleAge(peopleArray);
console.log(doubledAge);

///////////////////////////////////////Test.

describe("doubleAge", function() {

    it("returns the doubled age", function() {
  
      let peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}]
      let doubledAge = doubleAge(peopleArray);
  
      assert.deepEqual(doubledAge, [{name: "Sam", age: 30}, {name: "William", age: 12}, {name: "Lucy", age: 26}]);
    });
  });
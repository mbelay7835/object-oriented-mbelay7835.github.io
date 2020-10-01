"use strict";

function doubleNum(arr){
    let doubledArr = arr.map(element => element*2);
    return doubledArr;
}
let numArray = [300, 51, 2];
let doubled = doubleNum(numArray);
console.log(doubled);

///////////////////////////////////////Test.

describe("doubleNum", function() {

    it("returns the doubled values", function() {
  
        let numArray = [300, 51, 2];
  
        let doubled = doubleNum(numArray);
  
      assert.deepEqual(doubled, [600, 102, 4]);
    });
  });

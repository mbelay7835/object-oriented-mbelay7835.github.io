"use strict";
//////////////////////////////////////////////////The maximal salary.
{
/**
 * Returns the name who has maximum salary.
 
 * @param {object} salaries object with salaries.
 * @return {String} the name who has maximum salary.
 */
function topSalary(salaries) {

    let maxSalary = 0;
    let person = null;
    for (let [key, value] of Object.entries(salaries)) {
        if (value > maxSalary) {
            maxSalary = value;
            person = key;
        }
    }
    return person;
}
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
console.log(topSalary(salaries));

/////////////////////////////////////////////// test
describe("topSalary", function() {
    it("returns top-paid person", function() {
      let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
      };
  
      assert.equal( topSalary(salaries), "Pete" );
    });
  
    it("returns null for the empty object", function() {
      assert.isNull( topSalary({}) );
    });
  });

}
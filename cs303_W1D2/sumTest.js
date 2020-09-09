"use strict";
/* global sum assert */
describe("sum", function() {

    it("6 3 4 sum 13", function() {
      assert.equal(sum([6, 3, 4]), 13);
    });
  
    it("10 5 5 sum 20", function() {
      assert.equal(sum([10, 5, 5]), 20);
    });  

    it("4 6 10 sum 20", function() {
        assert.equal(sum([4, 6, 10]), 20);
      }); 
  
  });
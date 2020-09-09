"use strict";
/* global max3 assert */
describe("max3", function() {

    it("6 greater than 3 and 4", function() {
      assert.equal(max3(4, 3, 6), 6);
    });
  
    it("10 greater than 7 and 8", function() {
      assert.equal(max3(10, 7, 8), 10);
    });  

    it("20 greater than 11 and 15", function() {
        assert.equal(max3(11, 20, 15), 20);
      }); 
  
  });
"use strict";
/* global findLongestWord assert */
describe("findLongestWord", function() {

    it("'Mequanint' 'Adugna' 'Belay' longest 9", function() {
      assert.equal(findLongestWord(['Mequanint', 'Adugna', 'Belay']), 9);
    });
  
    it("'hello', 'hi', 'what' longest 5", function() {
      assert.equal(findLongestWord(['hello', 'hi', 'what']), 5);
    });  

    it("'he', 'she', 'them' longest 4", function() {
        assert.equal(findLongestWord(['he', 'she', 'them']), 4);
      }); 
  
  });
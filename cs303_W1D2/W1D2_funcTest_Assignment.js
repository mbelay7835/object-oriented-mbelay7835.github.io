"use strict";
///////////////////////////////////sum Test.

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

///////////////////////////////////////////////////max Test

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

  //////////////////////////////////////////////////////longestWord Test

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

  /////////////////////////////////////////////////////////////////isVowel Test

/* global assert isVowel*/
/* isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false
otherwise. */
describe("isVowel", function () {
    it("a is vowel", function () {
    assert.equal(isVowel("a"), true);
    });
    it("e is vowel", function () {
    assert.equal(isVowel("e"), true);
    });
    it("i is vowel", function () {
    assert.equal(isVowel("i"), true);
    });
    it("o is vowel", function () {
    assert.equal(isVowel("o"), true);
    });
    it("u is vowel", function () {
    assert.equal(isVowel("u"), true);
    });
    it("z is not vowel", function () {
    assert.equal(isVowel("z"), false);
    });
    it("5 is not vowel", function () {
    assert.equal(isVowel("5"), false);
    });
   });

   ////////////////////////////////////////////////////////////////reverse Test

/* global reverse assert */
describe("reverse", function() {

    it("'meku' reversed ukem", function() {
      assert.equal(reverse('meku'), 'ukem');
    });
  
    it("'yes' reversed sey", function() {
      assert.equal(reverse('yes'), 'sey');
    });  

    it("'my name' reversed eman ym", function() {
        assert.equal(reverse('my name'), 'eman ym');
      }); 
  
  });

/////////////////////////////////////////////////////// filter Long Word Test
  /* global filterLongWord assert */
describe("filterLongWords", function () {

  it(`(['meku','adugn','belay'], 4) output  [adugn','belay']`, function () {
    assert.deepEqual(filterLongWords(["meku", "adugn", "belay"], 4), ["adugn", "belay"]);
  });

  it("(['beya','adugna','bela'], 3) output  ['beya', 'adugna','bela']", function () {
    assert.deepEqual(filterLongWords(['beya', 'adugna', 'bela'], 3), ['beya', 'adugna', 'bela']);
  });

  it("(['meet','month','ye'], 2) output  ['month','yes']", function () {
    assert.deepEqual(filterLongWords(['meet', 'month', 'ye'], 2), ["meet", 'month']);
  });

});
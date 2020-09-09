"use strict";
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
"use strict";


/**
 * 
 * @param {String} name input name.
 * @returns {*} undefined.
 */
function Rabbit(name) {
    this.name = name;
  }
  Rabbit.prototype.sayHi = function() {
    console.log( this.name );
  };
  
  let rabbit_ = new Rabbit("Rabbit");
  
  rabbit_.sayHi();                        // Rabbit
  Rabbit.prototype.sayHi();              // undefined
  Object.getPrototypeOf(rabbit_).sayHi(); // undefined
  rabbit_.__proto__.sayHi();              // undefined


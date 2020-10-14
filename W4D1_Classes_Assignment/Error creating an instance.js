"use strict";

/* eslint-disable */

//////////////////////////////Code with error
/**
 * class Animal {

    constructor(name) {
        this.name = name;
    }

}

class Rabbit extends Animal {
    constructor(name) {
        this.name = name;
        this.created = Date.now();
    }
}

   let rabbit = new Rabbit("White Rabbit"); 
 */




//   console.log(rabbit.name);// Error: this is not defined.


///////////////////////////////////CORRECTED CODE
{
class Animal {

    constructor(name) {
        this.name = name;
    }

}

class Rabbit extends Animal {
    constructor(name) {
        super(name);
        this.created = Date.now();
    }
}

let rabbit = new Rabbit("White Rabbit"); // ok now
console.log(rabbit.name); // White Rabbit

}
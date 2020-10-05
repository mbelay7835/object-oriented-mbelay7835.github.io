"use strict"

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}

sayHi(); // error.

// The function sayHi is declared inside the if, so it only lives inside it.
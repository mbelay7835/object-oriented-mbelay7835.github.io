"use strict";

let i = 0;

setTimeout(() => console.log(i), 100); // 100000000

for(let j = 0; j < 100000000; j++) {
  i++;
}

/**
 * Any setTimeout will run only after the current code has finished.
 * The i will be the last one: 100000000.
 */
"use strict";

{
function Counter() {
    
    let count = 0;

    this.up = function () {
        return ++count;
    };
    this.down = function () {
        return --count;
    };
}

let counter = new Counter();

console.log(counter.up()); // 1
console.log(counter.up()); // 2
console.log(counter.down()); // 1
}

/*Both nested functions are created within the same outer Lexical Environment,
 so they share access to the same count variable.
*/
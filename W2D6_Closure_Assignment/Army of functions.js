"use strict";

function makeArmy() {
    let shooters = [];

    for (let i = 0; i < 10; i++) {
        let shooter = function () { // shooter function
            console.log(i); // should show its number
        };
        shooters.push(shooter);
    }

    return shooters;
}

let army = makeArmy();

// Now the code works correctly
army[0](); // 0
army[5](); // 5
army[9](); // 9
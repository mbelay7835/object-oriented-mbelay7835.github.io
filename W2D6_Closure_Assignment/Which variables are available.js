"us estrict";

function makeWorker() {
    let name = "Pete";

    return function () {
        console.log(name);
    };
}

let name = "John";
// create a function
let work = makeWorker();

work(); // what will it show? pete. 
  /*
Because The work() function in the code below gets name
from the place of its origin through the outer lexical environment reference
*/
"use strict";

{
let x = 1;

function func() {
    console.log(x); // ?

    let x = 2;
}

func(); //error.....Cannot access 'x' before initialization.
}
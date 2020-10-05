"use strict";

let name = "John";

function sayHi() {
    console.log("Hi, " + name);
}

name = "Pete";

sayHi(); // what will it show: "John" or "Pete"? Hi, pete.
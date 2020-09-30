"use strict";

///////////////////////////////////////////////////Destructuring Assignment.

let user = { name: "John", years: 30 };

let { fName, years: age, isAdmin = false } = user;

console.log(fName); // John
console.log(age); // 30
console.log(isAdmin); // false
"use strict";

function byField(value) {

    return function (a, b) {
        return a[value] > b[value] ? 1 : -1;;
    }
}

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

let sortByName = users.sort(byField('name'));
let sortByAge = users.sort(byField('age'));

console.log(sortByName);
console.log(sortByAge);
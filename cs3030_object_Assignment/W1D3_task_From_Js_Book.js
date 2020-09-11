"use strict";

////////////////////////////////////////Hello, object
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

//////////////////////////////////////////Check for emptiness

/**
 * 
 * @param {object} obj value of object
 * @returns{boolean} return true if the object is empty otherwise return false
 */
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}
let schedule = {};
console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

console.log(isEmpty(schedule)); // false

///////////////////////////////////////// sum properties
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
console.log(sum);

///////////////////////////////////// Multiply numeric properties

/**
 * 
 * @param {object} obj input value of object
 * @returns{object} return multiplied object
 */
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == "number") {
            obj[key] *= 2;
        }
    }
}
console.log(multiplyNumeric(obj));

////////////////////////////////////// Using this in object literal

/**
 * @returns{value} returns any value of object
 */
function makeUser() {
    return {
        name: "John",
        ref() {
            return this;
        }
    };
};
let users = makeUser();
console.log(users.ref().name); // John

//////////////////////////////////////////////// Create a calculator


let calculator = {
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },

    read() {
        this.a = +prompt("a?", 0);
        this.b = +prompt("b?", 0);
    }
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
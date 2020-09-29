"use strict"

                               //CHAPTER: OBJECTS

/*
///////////////////////////////////////////////////////Two functions - one object
Is it possible to create functions A and B such as new A()==new B()?
If it is, then provide an example of their code.
*/
let obj = { name: "Mequanint" };

function A() {
    return obj;
}
function B() {
    return obj;
}

console.log(new A() == new B()); // true

////////////////////////////////////////////////////////Create new Calculator.

function Calculator() {

    this.read = function () {
        this.value1 = +prompt('value1?', 0);
        this.value2 = +prompt('value2?', 0);
    };

    this.sum = function () {
        return this.value1 + this.value2;
    };

    this.mul = function () {
        return this.value1 * this.value2;
    };
}

let calculator = new Calculator();
calculator.read();

console.log("Sum=" + calculator.sum());
console.log("Mul=" + calculator.mul());

////////////////////////////////////////////////////////////Create new Accumulator.

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        this.value += +prompt('How much to add?', 0);
    };

}
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log(accumulator.value);


                                 //CHAPTER: DATA TYPE

///////////////////////////////////////////////////Translate border-left-width to borderLeftWidth.

function camelize(str) {
    return str.split("-").map(
        // capitalizes first letters of all array items except the first one
        // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
        .join(""); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}

console.log(camelize("background-color"));//'backgroundColor'

////////////////////////////////////////////////////////////////Filter range.

function filterRange(arr, val1, val2) {
    return arr.filter(e => (val1 <= e && e <= val2));
}
let arr1 = [4, 3, 20, 7];
let filtered = filterRange(arr, 2, 5);
console.log(filtered); // [4,3] 
console.log(arr1); // [5,3,8,1]

/////////////////////////////////////////////////Filter range "in place".

function filterRangeInPlace(arr, val1, val2) {

    for (let i = 0; i < arr.length; i++) {
        // remove if outside of the interval
        if (arr[i] < val1 || arr[i] > val2) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}

let array = [5, 3, 8, 1];
console.log(filterRangeInPlace(array, 1, 4)); // [3, 1]

/////////////////////////////////////////////////////Sort in decreasing order.
let value = [5, 2, 1, -10, 8];

value.sort((a, b) => b - a);
console.log(value)//[8, 5, 2, 1, -10];

///////////////////////////////////////////////////Copy and sort array.

function copySorted(arr) {
    let copyArr = arr.slice()
    return copyArr.sort();
}

let arrStr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arrStr);

console.log(sorted)//[CSS, HTML, JavaScript];
console.log(arrStr)//["HTML", "JavaScript", "CSS"];

//////////////////////////////////////////////////Create an extendable calculator.

function Calculator() {

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.calculate = function (str) {

        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);
    };

    this.addMethod = function (name, func) {
        this.methods[name] = func;
    };
}

let calc = new Calculator;
console.log(calc.calculate("3 + 7")); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log(result); // 8

////////////////////////////////////////////////////////Map to names.

let users2 = [
    { name: "John", age: 25 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 28 }
];

let names = users2.map(element => element.name);

console.log(names); // ['John', 'Pete', 'Mary']

///////////////////////////////////////////////////////Map to objects.

let johny = { name: "John", surname: "Smith", id: 1 };
let peta = { name: "Pete", surname: "Hunt", id: 2 };
let marya = { name: "Mary", surname: "Key", id: 3 };

let users = [johny, peta, marya];

function mapped(e) {
    return {
        fullName: `${e.name} ${e.surname}`,
        id: e.id
    }
}

let usersMapped = users.map(mapped);
console.log(usersMapped);
/*
[
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

//////////////////////////////////////////////////Sort users by age.

function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr_y = [pete, john, mary];

sortByAge(arr_y);
console.log(arr_y)// [John, Mary, pete]

////////////////////////////////////////////////////Shuffle an Array.

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}
let arry = [2, 5, 3, 20];
console.log(shuffle(arry))//Shuffled value.

///////////////////////////////////////////////////Get average age.

function getAverageAge(users) {
    let sum = 0;
    for (let value of users) {
        sum += value.age;
    }
    return sum / users.length
}

let johnas = { name: "John", age: 25 };
let peter = { name: "Pete", age: 30 };
let maryam = { name: "Mary", age: 29 };

let store = [johnas, peter, maryam];

console.log(getAverageAge(store)); // 28

//////////////////////////////////////////////////Filter unique array members.

function unique(arr) {
    let output = [];
    for (let value of arr) {
        if (output.indexOf(value) === -1) {
            output.push(value);
        }
    }
    return output;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings)); // ['Hare', 'Krishna', ':-O']

//////////////////////////////////////////////////////////Create keyed object from array.

function groupById(arr) {
    let obj = {}
    for (let value of arr) {
        obj[value.id] = value
    }
    return obj
}
let users1 = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users1);
console.log(usersById)
  /*
// after the call we should have:
{
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
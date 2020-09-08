"use strict"

//Rewrite a function using "?".
function checkAge_1(age) {
    return (age > 18) ? true : confirm("Did parents allow you? ")
}
console.log(checkAge_1());


//Rewrite a function using "||".
function checkAge_2(age) {
    return (age > 18) || confirm("Did parents allow you? ")
}
console.log(checkAge_2());


//Write a function min(a,b) which returns the least of two numbers a and b.
function min(a, b) {
    if (a < b)
        return a;
    else
        return b;
}
console.log(min(20, 21));


//Write a function pow(x,n) that returns x in power n.
function pow(x, n) {
    let result = Math.pow(x, n);
    return result
}

let x = parseFloat(prompt("x?", ''));
let n = parseInt(prompt("n?", ''));

if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
} else {
    alert(pow(4, 3));
}


//Rewrite using arrow function.
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Do you agree?",
    () => console.log("You agreed."),
    () => console.log("You canceled the execution.")
);


//Is array copied.
let fruits = ["Apples", "Pear", "Orange"];
let shoppingCart = fruits;
shoppingCart.push("Banana");
console.log(fruits.length);


//Array operation.
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[1] = "Classics";
console.log(styles.shift());
styles.unshift("Rap", "Reggae");


//Calling in an array context.
let arr = ["a", "b"];
arr.push(function () {
    console.log(this);
})
arr[2](); // [a,b,function(){...}]


//Sum input numbers.
function sumInput() {
    let numbers = [];

    while (true) {
        let value = parseFloat(prompt("A number please?", 0));
        if (value === "" || value === null || !isFinite(value)) break;
        numbers.push(value);
    }
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

console.log(sumInput());


//A maximal subarray
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;

    for (let item of arr) { // for each item of arr
        partialSum += item; // add it to partialSum
        maxSum = Math.max(maxSum, partialSum); // remember the maximum
        if (partialSum < 0) partialSum = 0; // zero if negative
    }

    return maxSum;
}
console.log(getMaxSubSum([-1, 2, 3, -9]))



//Input:get array of words.
//Process:compare each element length.
//output:find the length of the longest word.

function findLongestWord(arr) {
    let longest_len = arr[0].length;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest_len) {
            longest_len = arr[i].length;
        }
    }
    return longest_len;
}
let largest = ["mequanint", "adugna", "belay"]
console.log(findLongestWord(largest))



//Input:get three numbers
//Process:use if statement to compare the numbers
//output:find the maximum

function maxOfThree(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        return n1;
    } else if (n2 > n1 && n2 > n3) {
        return n2;
    } else {
        return n3;
    }
}
console.log(maxOfThree(10, 20, 9))



//Input:get array of numbers.
//Process:multiply each element in the array.
//output:find the total product.

function multiply(arr) {
    let multiply = 1
    for (let i = 0; i < arr.length; i++) {
        multiply *= arr[i]
    }
    return multiply;
}
let input = [2, 4, 3]
console.log(multiply(input))



//Input:get array of numbers.
//Process:add each element in the array.
//output:find the total sum.

function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}
let input1 = [2, 3, 4]
console.log(sum(input1))


//Input:get array.
//Process:reverse the array.
//output:produces a new array that has the same elements in the inverse order.

function reverseArray(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}
let arr2 = [4, 2, 5, 6]
console.log(reverseArray(arr2))



//Input:get array.
//Process:modify the given array in reverse order.
//output:show modified array.

function reverseArrayInplace(arr) {
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        i++;
        j--
    }
    return arr;
}
let arr1 = [9, 4, 2, 6]
console.log(reverseArrayInplace(arr1))






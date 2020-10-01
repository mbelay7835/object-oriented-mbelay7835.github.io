"use strict";

//////////////////////////////////// Output a single-linked list.

/////////Using recursion.

function printListRecursion(list) {
    if (!list) return;
    console.log(list.value);
    printListRecursion(list.next);
}

//////////////////Using Loop.

function printListLoop(list) {

    while (list) {
        console.log(list.value);
        list = list.next;
    }
    return;
}


let list1 = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
printListRecursion(list1);// 1,2,3,4
printListLoop(list1);//1,2,3,4


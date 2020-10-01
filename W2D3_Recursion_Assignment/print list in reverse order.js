"use strict";

////////////////////////////////Output a single-linked list in the reverse order.

/////////////////////////////Using recursion.

function printReverseList(list) {

    if (list.next) {
        printReverseList(list.next);
    }

    console.log(list.value);
}

//////////////////////////////Using Loop.

function printReverseListLoop(list) {
    let arr = []
    while (list) {
        arr.push(list.value);
        list = list.next;
    }
    for (let value of arr.reverse()) {
        console.log(value)
    }
}


let list = {
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
printReverseListLoop(list);//4,3,2,1
printReverseList(list);//4,3,2,1
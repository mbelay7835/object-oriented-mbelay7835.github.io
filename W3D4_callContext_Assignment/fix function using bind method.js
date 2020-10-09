"use strict";

{
    let group = {
        title: "Our Group",
        students: ["John", "Pete", "Alice"],

        showList() {
            this.students.forEach(function (student) {
                //Using bind method we can use "this" inside the function
                console.log(this.title + ': ' + student)
            }.bind(group));
        }
    };

    group.showList();

}
"use strict";

let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];

/**
 * Event handler to display data in library 
 * @returns {string} return book datas from array
 */
function bookLibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let libraryID = (document.getElementById("id").value);

    library.push({ title: title, author: author, libraryID: libraryID });

    let display = [];
    for (let element of library) {
        display.push(element.title + ", " + element.author + ", " + element.libraryID + "<br>");
    }

    document.getElementById("display").innerHTML = display;
}

/**
 * Event handler to display library titles sorted alphabetically
 * @returns {string} return titles from array
 */
function showTitles() {

    let titles = [];
    for (let book of library) {
        titles.push(book.title + "\n");
    }
    titles = titles.sort();

    document.getElementById("displayArea").innerHTML = titles;
}

/**
 * Event handler to display library author sorted alphabetically
 * @returns {string} return authors from array
 */
function showAuthor() {

    let author = [];
    for (let book of library) {
        author.push(book.author + "\n");
    }
    author = author.sort();

    document.getElementById("displayArea").innerHTML = author;
}

/**
 * Event handler to display library libraryId sorted numericaly
 * @returns {string} return libraryId from array
 */
function libraryId() {

    let libraryID = [];
    for (let book of library) {
        libraryID.push(book.libraryID + "\n");
    }
    libraryID = libraryID.sort((ini, last) => ini-last);

    document.getElementById("displayArea").innerHTML = libraryID;
}


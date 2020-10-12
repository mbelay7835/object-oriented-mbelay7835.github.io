"use strict";

let winners = new Array();
let player1Selections = new Array();
let player2Selections = new Array();
let timer;
let numberOfPlayers = 2;
let currentPlayer = 0;
let move = 0;
let points1 = 0;    // player 1 points
let points2 = 0;    // player 2 points
let size = 4;

/**
 * @returns {*} undefined
 */
function drawBoard() {
    let Parent = document.getElementById("game");
    let counter = 1;

    while (Parent.hasChildNodes()) {
        Parent.removeChild(Parent.firstChild);
    }

    for (let s = 0; s < 4; s++) { // The variable s needs to be declared before using it
        let row = document.createElement("tr");

        for (let r = 0; r < 4; r++) {// The variable r needs to be declared before using it
            let col = document.createElement("td");
            col.id = counter;

            /**
             * 
             * @param {*} e event handler.
             * @returns {*} undefined
             */
            let handler = function (e) {
                if (currentPlayer == 0) {
                    this.innerHTML = "X";
                    player1Selections.push(parseInt(this.id));
                    player1Selections.sort(function (a, b) { return a - b; });
                    d("player1").classList.remove("selected");
                    d("player2").classList.add("selected");
                }

                else {
                    this.innerHTML = "O";
                    player2Selections.push(parseInt(this.id));
                    player2Selections.sort(function (a, b) { return a - b; });
                    d("player1").classList.add("selected");
                    d("player2").classList.remove("selected");
                }

                if (checkWinner()) {
                    if (currentPlayer == 0)
                        points1++;
                    else
                        points2++;

                    document.getElementById("player1").innerHTML = points1;
                    document.getElementById("player2").innerHTML = points2;

                    reset();
                    drawBoard();
                }

                else if (player2Selections.length + player1Selections.length == 16) {
                    reset();
                    drawBoard();
                }
                else {
                    if (currentPlayer == 0)
                        currentPlayer = 1;
                    else
                        currentPlayer = 0;
                    this.removeEventListener("click", arguments.callee);
                }
            };

            col.addEventListener("click", handler);

            row.appendChild(col);
            counter++;
        }

        Parent.appendChild(row);
    }

    loadAnswers();
}

/**
 * 
 * @param {String} id identifier name in string.
 * @returns {String} el returned value when we enter id
 */
function d(id) {
    let el = document.getElementById(id);
    return el;
}

/**
 * @returns {*} no returned value
 */
function reset() {
    currentPlayer = 0;
    player1Selections = new Array();
    player2Selections = new Array();
    d("player1").classList.add("selected");
    d("player2").classList.remove("selected");
}

/**
 * @returns {*} no returned value.
 */
function loadAnswers() {
    winners.push([1, 2, 3, 4]);
    winners.push([5, 6, 7, 8]);
    winners.push([9, 10, 11, 12]);
    winners.push([13, 14, 15, 16]);
    winners.push([1, 5, 9, 13]);
    winners.push([2, 6, 10, 14]);
    winners.push([3, 7, 11, 15]);
    winners.push([4, 8, 12, 16]);
    winners.push([1, 6, 11, 16]);
    winners.push([4, 7, 10, 13]);
}

/**
 * @returns {boolean} return true if the current player has a wining hand otherwise return false.
 */
function checkWinner() {
    // check if current player has a winning hand
    // only stsrt checking when player x has size number of selections
    let win = false;
    let playerSelections = new Array();

    if (currentPlayer == 0)
        playerSelections = player1Selections;
    else
        playerSelections = player2Selections;

    if (playerSelections.length >= size) {
        // check if any 'winners' are also in your selections

        for (let i = 0; i < winners.length; i++) {// The variable i needs to be declared before using it
            let sets = winners[i];  // winning hand
            let setFound = true;

            for (let r = 0; r < sets.length; r++) {// The variable r needs to be declared before using it
                // check if number is in current players hand
                // if not, break, not winner
                let found = false;

                // players hand
                for (let s = 0; s < playerSelections.length; s++) {// The variable s needs to be declared before using it.
                    if (sets[r] == playerSelections[s]) {
                        found = true;
                        break;
                    }
                }

                // value not found in players hand
                // not a valid set, move on
                if (found == false) {
                    setFound = false;
                    break;
                }
            }

            if (setFound == true) {
                win = true;
                break;
            }
        }
    }

    return win;
}

window.addEventListener("load", drawBoard);
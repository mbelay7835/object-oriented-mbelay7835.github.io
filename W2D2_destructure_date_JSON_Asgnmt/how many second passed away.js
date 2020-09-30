"use strict";

//////////////////////////////////////////////////////////// How many seconds has passed today?

/**
* returns the number of seconds from the beginning of today..
* @return {Number} returns the number of seconds from the beginning of today.
*/
function getSecondsToday() {
    let date = new Date();
    let seconds = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
    return seconds;
}

console.log(getSecondsToday());
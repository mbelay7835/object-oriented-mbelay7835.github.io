"use strict";

/* eslint-disable */

class ExtendedClock extends Clock {
  constructor(templete, precision = 1000) {
    super(templete);
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
};

let extended = new ExtendedClock('h:m:s', 3000);
extended.start();
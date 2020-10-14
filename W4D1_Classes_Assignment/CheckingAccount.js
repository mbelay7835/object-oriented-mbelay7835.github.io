"use strict";

/* eslint-disable */

class CheckingAccount extends Account {
    /**
     * Constructor for creating a new SavingsAccount object
     * 
     * @param {number} number the number for this account
     * @param {number} overdraft is the overdraft amount
     */
    constructor(overdraft, num) {
        super(num);
        this._overdraft = overdraft;
    }

    /**
     * 
     * @param {number} draft is the new draft value
     * @returns {undefined} resets the draft value
     */

    setOverDraft(draft) {
        this._overdraft = draft;
    }

    /**
     * @returns {number} the overdraft value
     */

    getOverDraft() {
        return this._overdraft;
    }
}


let check = new CheckingAccount(50, 123);

console.log("Over draft value is ",check.getOverDraft());
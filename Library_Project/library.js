/////////////////////////Book class
class Book {
    constructor(title = null, author = null, isbn = "", chargePerDay = 1, maxCharge = 60) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.chargePerDay = chargePerDay;
        this.maxCharge = maxCharge;
    }
}


/////////////////////////Library class
class Library {
    constructor(books = [], members = []) {
        this.books = books;
        this.members = members
    }

    addBook(newBook) {
        this.books.push(newBook);
    }

    addMember(newMember) {
        this.members.push(newMember)
    }
}

///////////////////////////////Loan class
class Loan {
    constructor(book, dueDate) {
        this.book = book;
        this.dueDate = dueDate;
    }

    computeCharge(returnDate) {
        if (returnDate > this.dueDate) {
            let durationInDay = Math.round((returnDate - this.dueDate) / (1000 * 60 * 60 * 24));
            let charge = durationInDay * this.book.chargePerDay;
            return charge > this.book.maxCharge ? this.book.maxCharge : charge
        }

        return 0;
    }


    computePoint(returnDate) {
        let durationInDay = Math.round((returnDate - this.dueDate) / (1000 * 60 * 60 * 24));
        let charge = durationInDay * this.book.chargePerDay;
        let dollarsPerPoint = 5;
        if (charge > this.book.maxCharge) {
            let point = Math.floor((charge - this.book.maxCharge) / dollarsPerPoint);
            return point;
        }
        return 0;
    }
}

//This function does concatinate each books and will call later in computeCharge method in Member class
function totBookLoaned(member) {
    let booksName = ""
    for (let booki of member) {
        booksName += booki.book.title + ", "
    }
    if (booksName == "") {
        return "Didn't loan any book"
    } else {
        return booksName;
    }

}

//////////////////////////////Member class
class Member {
    constructor(name = null) {
        this._name = name;
        this.loans = [];
        this.point = 0;
        //this.rate = 0;
    }

    addLoan(loan) {
        this.loans.push(loan)
    }

    computeCharge(returnDate = new Date()) {
        let message = " You suspendede because your point is more than five."

        this.point += loan.computePoint(returnDate)
        let charge = 0;
        for (let loan of this.loans) {
            charge += loan.computeCharge(returnDate)
        }
        if (this.point > 4) {

            return `Total amount charged:  $ ${charge}. <br>
                    Point:  ${this.point} <br>
                    Book name:  ${totBookLoaned(this.loans)} <br>
                    ${message}`
        } else {

            return `Total amount charged:  $ ${charge}. <br>
                    Point:  ${this.point} <br>
                    Book name:  ${totBookLoaned(this.loans)} <br>`
        }
    }
}



let library = new Library();

let theLord = new Book("The lord of the ring", "Mequanint", "2020", 0.5, 30);
let theRing = new Book("The ring", "Samson", "202020202020", 0.5, 60);
let theRoad = new Book("The road", "James", "20202020", 0.5, 60);
let trip = new Book("Road Trip Usa", "Steve", "20202021", 0.5, 60);

let dueDate = new Date();
dueDate.setMonth(dueDate.getMonth() + 1);

let loan = new Loan(theLord, dueDate);
let loan1 = new Loan(theRing, dueDate);
let loan2 = new Loan(theRoad, dueDate);


let member = new Member("Mequanint Belay");
let member1 = new Member("Sirak Sirak");
let member2 = new Member("Hamid Hamid");


member.addLoan(loan);
member1.addLoan(loan1);
member2.addLoan(loan2);

library.addBook(theLord);
library.addBook(theRoad);
library.addBook(theRing);
library.addBook(trip);

library.addMember(member);
library.addMember(member1);
library.addMember(member2);













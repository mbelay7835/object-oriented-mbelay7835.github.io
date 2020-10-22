

function pullInfo() {
    let memb = document.getElementById("student_name").value
    for (let member of library.members) {
        if (member._name === memb) {
            if (member.loans.length === 0) {
                document.getElementById("info").innerHTML = memb + ": You are not borrowed any book";
                return;
            } else {
                let return_date = document.getElementById("return_date").value;
                if (return_date == "") {
                    document.getElementById("info").innerHTML = member.computeCharge(new Date());
                } else {
                    document.getElementById("info").innerHTML = member.computeCharge(new Date(return_date));
                }
                return;
            }
        }

    }

    register();
}


function register() {
    alert("You are not member");
    let register = prompt("Do you want to be a member? (yes or no)");
    if (register == "yes") {
        let newMember = prompt("please enter first and last name: ");
        if (newMember == "") return;
        library.addMember(new Member(newMember));
        alert("Registered")
    }
}


function addBook() {
    let dueMonth = 1;
    let dueDate = new Date();
    dueDate.setMonth(dueDate.getMonth() + dueMonth);

    let borrowerName = prompt("Enter first and last name: ");
    for (let member of library.members) {
        if (member._name === borrowerName) {
            let bookName = prompt("Enter book name: ");
            for (let book of library.books) {
                if (bookName == book.title) {
                    member.addLoan(new Loan(book, dueDate));
                    alert("Book added");
                    return;
                }
            }

            alert("Sorry we don't have this book ");
            return;
        }
    }

    register()
}



function reset() {
    let memb = document.getElementById("student_name").value
    for (let member of library.members) {
        if (member._name === memb) {
            if (member.point < 5) {
                member.loans.length = 0

            } else {
                let ind = library.members.indexOf(member)
                library.members.splice(ind, 1)
                document.getElementById("reset").innerHTML = "You suspended";
            }
        }
    }
}
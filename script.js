const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook() {
    let title = prompt("Enter a title:");
    let author = prompt("Enter the author:");
    let pages = prompt("Enter how many pages it has:");
    let read = prompt("Enter a read status (have/have not):");

    const book = new Book(title, author, pages, read);

    myLibrary.push(book);
}

//Sets default value into myLibrary array//
myLibrary.push(new Book('1984', 'George Orwell', '328', 'have not'));

const addButton = document.querySelector("#add");

addButton.addEventListener("click", () => {
    addBook();
    console.log(myLibrary);
});

function displayBooks(array) {
    const shelf = document.querySelector("#shelf");
    //Clear display//
    shelf.innerHTML = "";
    //Loop through array//
    for (let i = 0; i < array.length; i++) {
        const div = document.createElement("div");
        const title = document.createElement("p");

        title.textContent = "title";

        shelf.appendChild(div);
        div.appendChild(title);
    }
}

displayBooks(myLibrary);
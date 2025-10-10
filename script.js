const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    //Generates new ID for easier manipulation//
    this.id = crypto.randomUUID();
}

function addBook() {
    let title = prompt("Enter a title:");
    let author = prompt("Enter the author:");
    let pages = prompt("Enter how many pages it has:");
    let read = prompt("Enter a read status (have/have not):");

    const book = new Book(title, author, pages, read);

    myLibrary.push(book);
}

function displayBooks(array) {
    const shelf = document.querySelector("#shelf");

    //Clear display//
    shelf.innerHTML = "";

    //Loop through array//
    for (let i = 0; i < array.length; i++) {
        //Create elements//
        const div = document.createElement("div");
        const title = document.createElement("p");
        const author = document.createElement("p");
        const pages = document.createElement("p");
        const read = document.createElement("p");
        const remove = document.createElement("button");

        //Get content from array for elements//
        title.textContent = "Title: " + array[i].title;
        author.textContent = "Author: " + array[i].author;
        pages.textContent = "Page Count: " + array[i].pages;
        read.textContent = "Read Status: " + array[i].read;
        remove.textContent = "X";

        //Add elements to DOM//
        shelf.appendChild(div);
        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(pages);
        div.appendChild(read);
        div.appendChild(remove);

        console.log(array[i].id);
    }
}

//Sets default value(s) into 'myLibrary' array//
myLibrary.push(new Book('1984', 'George Orwell', '328', 'Read'));
myLibrary.push(new Book('The Great Gatsby', 'F. Scott Fitzgerald', '230', 'Read'));
myLibrary.push(new Book('The Art of War', 'Sun Tzu', '192', 'Have not'));

displayBooks(myLibrary);

const addButton = document.querySelector("#add");

addButton.addEventListener("click", () => {
    addBook();
    displayBooks(myLibrary);
});
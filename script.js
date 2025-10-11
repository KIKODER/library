const myLibrary = [];
const newBook = document.querySelector("#newBook");
const form = newBook.querySelector("form");
const addButton = document.querySelector("#add");
const closeButton = document.querySelector("#close");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    //Generates new ID for easier array manipulation//
    this.id = crypto.randomUUID();
}

function removeBook(id) {
    const index = myLibrary.findIndex(book => book.id === id);
    if (index !== -1) {
        myLibrary.splice(index, 1);
        displayBooks(myLibrary);
    }
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

        //Removes book on button call//
        remove.addEventListener("click", () => {
            removeBook(array[i].id);
        });

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
myLibrary.push(new Book('1984', 'George Orwell', '328', 'Yes')); myLibrary.push(new Book('The Great Gatsby', 'F. Scott Fitzgerald', '230', 'Yes')); 
myLibrary.push(new Book('The Art of War', 'Sun Tzu', '192', 'No')); 

displayBooks(myLibrary);

//Button handlers//
addButton.addEventListener("click", () => {
    newBook.showModal();
});

closeButton.addEventListener("click", () => {
    newBook.close();
})

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const titleValue = document.querySelector("#title").value;
    const authorValue = document.querySelector("#author").value;
    const pagesValue = document.querySelector("#pages").value;
    const readValue = document.querySelector("#read").value;

    const book = new Book(titleValue, authorValue, pagesValue, readValue);

    myLibrary.push(book);

    displayBooks(myLibrary);

    newBook.close();
    e.target.reset();
});

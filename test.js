// The user clicks the new book button
// This brings up a form to input the book info
// When the submit button is pressed. It scans the text content of each form item
// When they submit this info it created an object thats pushed into the array
// A loop scans through the array and displays all the books on the html
let myLibrary = [];

function book (title, author, pages, readOrNot) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readOrNot = readOrNot
}

function addBookToLibrary(title, author, pages, readOrNot) {
    myLibrary.push(bookItem = new book(title, author, pages, readOrNot))
    removeAllChildNodes(booksOnPage)
    loopArrayThenDisplay()
}

const booksOnPage = document.querySelector('.books')

function loopArrayThenDisplay() {
    removeAllChildNodes(booksOnPage)
    for (i = 0; i < myLibrary.length; i++) {
        let newDiv = document.createElement('div')
        booksOnPage.appendChild(newDiv)
        newDiv.classList.add(`book${i}`)

        let bookTitle = document.createElement('h1')
        bookTitle.textContent = myLibrary[i].title
        newDiv.appendChild(bookTitle)
       
        let bookAuthor = document.createElement('p')
        newDiv.appendChild(bookAuthor)
        bookAuthor.textContent = myLibrary[i].author

        let bookPages = document.createElement('p')
        newDiv.appendChild(bookPages)
        bookPages.textContent = myLibrary[i].pages

        let bookRead = document.createElement('p')
        newDiv.appendChild(bookRead)
        bookRead.textContent = myLibrary[i].readOrNot
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const readOrNotButton = document.querySelector('.addNotRead')
let readOrNotvalue;
readOrNotButton.addEventListener('click', function() {
    if (readOrNotvalue === 1) {
        readOrNotButton.textContent = 'Not Read'
        readOrNotButton.style.backgroundColor = 'red'
        readOrNotvalue = 0
    }
    else {
        readOrNotButton.textContent = 'Read'
        readOrNotButton.style.backgroundColor = 'green'
        readOrNotvalue = 1
    }
})

const addNewBookDiv = document.querySelector('.addNewBookDiv')
const addBookButton = document.querySelector('.addBookButton')
addBookButton.addEventListener('click', function() {
  if (addNewBookDiv.style.display === "block") {
    addNewBookDiv.style.display = "none";
  } else {
    addNewBookDiv.style.display = "block";
  }
})

// prevent submit button
const submitButton = document.querySelector('.addBookSubmit')
submitButton.addEventListener("click", checkboxClick, false)
function checkboxClick(event) {
    event.preventDefault()
}

submitButton.addEventListener("click", function() {
    
})

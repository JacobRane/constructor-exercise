let myLibrary = [];


function book (title, author, pages, readOrNot) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readOrNot = readOrNot
}

function addBookToLibrary(title, author, pages, readOrNot) {
    myLibrary.push(bookItem = new book(title, author, pages, readOrNot))
    
    loopArrayThenDisplay()
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
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
        bookPages.textContent = `Pages: ${myLibrary[i].pages}`

        let bookRead = document.createElement('button')
        newDiv.appendChild(bookRead)
        bookRead.textContent = myLibrary[i].readOrNot
        if (myLibrary[i].readOrNot === 'Read') {
            bookRead.style.backgroundColor = 'green'
        }
        else if (myLibrary[i].readOrNot === 'Not Read') {
            bookRead.style.backgroundColor = 'red'
        }
        bookRead.classList.add(`bookReadOrNot${i}`)
        bookRead.addEventListener('click', function() {
            if (this.textContent === 'Read') {
                this.textContent = 'Not Read'
                let classToNumber = this.parentElement.className
                let classToNumber2 = classToNumber.replace(/\D/g,'')
                myLibrary[`${classToNumber2}`].readOrNot = 'Not Read'
                this.style.backgroundColor = 'red'
            }
            else if (this.textContent = 'Not Read') {
                this.textContent = 'Read'
                let classToNumber = this.parentElement.className
                let classToNumber2 = classToNumber.replace(/\D/g,'')
                myLibrary[`${classToNumber2}`].readOrNot = 'Read'
                this.style.backgroundColor = 'green'
            }
        })

        let bookRemove = document.createElement('button')
        newDiv.appendChild(bookRemove)
        bookRemove.classList.add(`remove${i}`)
        bookRemove.textContent = 'Remove'
        bookRemove.addEventListener('click', function() {
            let current = this.className
            let newThingTemp = current.replace(/\D/g,'')
            myLibrary.splice(`${newThingTemp}`, (`${newThingTemp}` + 1) )
            this.parentElement.remove()
        })
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
  const addTitle = document.querySelector('.addTitle')
  addTitle.value = null;
  const addAuthor = document.querySelector('.addAuthor')
  addAuthor.value = null;
  const addPages = document.querySelector('.addPages')
  addPages.value = null;
  
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
    addBookToLibrary(
        document.querySelector('.addTitle').value,
        document.querySelector('.addAuthor').value,
        document.querySelector('.addPages').value,
        document.querySelector('.addNotRead').textContent,
    )
    addNewBookDiv.style.display = "none"
    readOrNotButton.textContent = 'Not Read'
    readOrNotButton.style.backgroundColor = 'red'
    readOrNotvalue = 0;
})



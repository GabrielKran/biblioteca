const myLibrary = [];

function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
}

//form
const form = document.getElementById('form-book')
const getTitle = document.getElementById('title');
const getAuthor = document.getElementById('author');
const getPages = document.getElementById('pages');
const getRead = document.getElementById('selector');

//view Form and exit form
const buttonForm = document.getElementById('button-form');
const layout = document.getElementById('layout');
const mainForm = document.getElementById('main-form');
const exitForm = document.getElementById('exit-form');

//button for check and no check
const buttonCheck = document.getElementById('check');
const buttonNoCheck = document.getElementById('no-check');

function addBookToLibrary(book) {    
    const cardsDiv = document.querySelector('.cards');
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <div class="img">
            <img src="imgs/x.svg" alt="x" id="exit-card" data-id="${book.id}">
        </div>
        <h2>${book.title}</h2>
        <p><strong>${book.author}</strong></p>
        <p>${book.pages} pág.</p>
        <div class="buttons">
            <button class="check ${book.read === 'finished'? 'check-no-view': ''}">✓</button>
            <button class="no-check ${book.read !== 'finished' ? 'check-no-view': ''}">X</button>
        </div>
    `

    const checkButton = card.querySelector('.check');
    const noCheckButton = card.querySelector('.no-check');

    checkButton.addEventListener('click', () => {
        checkButton.classList.add('check-no-view');
        noCheckButton.classList.remove('check-no-view');
        book.read = 'toRead';
        console.log(myLibrary);
    })

    noCheckButton.addEventListener('click', () => {
        noCheckButton.classList.add('check-no-view');
        checkButton.classList.remove('check-no-view');
        book.read ='finished';
        console.log(myLibrary);
    })

    cardsDiv.appendChild(card);

    const removeCard = card.querySelector('#exit-card');
    removeCard.addEventListener('click', (e) => {
        const bookID = e.target.dataset.id;
        const index = myLibrary.findIndex(book => book.id === bookID);
        if (index !== -1) {
            myLibrary.splice(index, 1);
            card.remove();
            console.log(`deletando o livro ${book.title}`); 
        }
    })

}

function viewAndExitForm() {
    buttonForm.addEventListener('click', () => {
        layout.classList.add('blur-all');
        mainForm.classList.remove('view-form');
    })

    exitForm.addEventListener('click', () => {
        layout.classList.remove('blur-all');
        mainForm.classList.add('view-form');
    })
}

function formInputs() {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = getTitle.value;
        const author = getAuthor.value;
        const pages = getPages.value;
        const read = getRead.value;
        
        const newBook = new Book(title, author, pages, read, crypto.randomUUID());
        myLibrary.push(newBook);
        addBookToLibrary(newBook);
        layout.classList.remove('blur-all');
        mainForm.classList.add('view-form');

        form.reset();
    })
}

function addBooksManual() {
    const book1 = new Book('Amor e Gelato', 'Jenna Evans Welch', '320', 'to-read', crypto.randomUUID());
    const book2 = new Book('One Piece', 'Eiichiro Oda', '21000', 'finished', crypto.randomUUID());
    const book3 = new Book('Kimetsu no Yaiba', 'Koyoharu Gotouge', '4416', 'finished', crypto.randomUUID());
    myLibrary.push(book1, book2, book3);
    addBookToLibrary(book1);
    addBookToLibrary(book2);
    addBookToLibrary(book3);
}

addBooksManual();
formInputs();
viewAndExitForm();
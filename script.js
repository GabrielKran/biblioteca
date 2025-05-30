const myLibrary = [];

function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
}

//form
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

function addBookToLibrary() {
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

function checkNoCheck() {
    buttonCheck.addEventListener('click', () => {
        buttonCheck.classList.add('check-no-view');
        buttonNoCheck.classList.remove('check-no-view');
    })

    buttonNoCheck.addEventListener('click', () => {
        buttonNoCheck.classList.add('check-no-view');
        buttonCheck.classList.remove('check-no-view');
    })
}

checkNoCheck();
viewAndExitForm();
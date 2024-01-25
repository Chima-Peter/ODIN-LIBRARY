const addBtn = document.querySelector('.addBtn');
const body = document.querySelector('body');
const formContainer = document.querySelector('.formContainer');
const formCancel = document.querySelector('#formCancel');
const form = document.querySelector('#form');
const bookContainer = document.querySelector('.books');
const oneBook = document.createElement('div');
const titleName = document.createElement('p');
const authorName = document.createElement('p');
const pagesNum = document.createElement('p');
const btnContainer = document.createElement('div');
const readBtn = document.createElement('button');
const removeBtn = document.createElement('button');
let book = [];

function Book(title, author, pages, read, id) {
    this.title = title;
    this.author =  author;
    this.read = read;
    this.pages = pages;
    this.id = id;
}

function bookConstructor(obj)  {
    titleName.textContent = 'BOOK TITLE: ' + obj.title.toUpperCase();
    authorName.textContent = 'BOOK AUTHOR: ' + obj.author.toUpperCase();
    pagesNum.textContent = 'This book has ' + obj.pages + 'pages';
    removeBtn.textContent = 'REMOVE';
    removeBtn.value = obj.id;
    btnContainer.appendChild(removeBtn);
    if (obj.read === 'NO') {
        readBtn.textContent = 'READ THIS BOOK YET?';
        readBtn.style.backgroundColor = 'red';
        readBtn.style.borderColor = 'red'; 
        readBtn.style.color = 'white';
        readBtn.value = obj.id;
        btnContainer.appendChild(readBtn);
    } else {
        readBtn.remove();
    }
    oneBook.appendChild(titleName);
    oneBook.appendChild(authorName);
    oneBook.appendChild(pagesNum);
    oneBook.appendChild(btnContainer);
    oneBook.classList.add('one');
    bookContainer.appendChild(oneBook);
}


addBtn.addEventListener('click', () => {
    body.style.padding = '0px';
    formContainer.classList.add('modal');
})
formCancel.addEventListener('click', () => {
    body.style.padding = '30px 50px';
    formContainer.classList.remove('modal');
    title.value = '';
    author.value = '';
    pages.value = '';
    form.elements['option'].value = '';
})
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let title = document.querySelector('#title');
    let author = document.querySelector('#author');
    let pages = document.querySelector('#pages');
    let id = book.length;
    book[book.length] = new Book(title.value, author.value, pages.value, form.elements['option'].value, id);
    title.value = '';
    author.value = '';
    pages.value = '';
    form.elements['option'].value = '';
    body.style.padding = '30px 50px';
    formContainer.classList.remove('modal');
    bookConstructor(book[book.length - 1]);
});

readBtn.addEventListener('click', () =>  {
    const index = Number(readBtn.value);
    book[index].read = 'YES';
    readBtn.remove();
});

removeBtn.addEventListener('click', () => {
        const index = Number(removeBtn.value);
        delete(book[index])
        book = book.filter((x) => x !== undefined);
        removeBtn.parentElement.parentElement.remove();
});



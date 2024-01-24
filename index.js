const addBtn = document.querySelector('.addBtn');
const body = document.querySelector('body');
const form = document.querySelector('.formContainer');
const formCancel = document.querySelector('#formCancel');
addBtn.addEventListener('click', () => {
    body.style.padding = '0px';
    form.classList.add('modal');
})
formCancel.addEventListener('click', () => {
    body.style.padding = '30px 50px';
    form.classList.remove('modal');
})
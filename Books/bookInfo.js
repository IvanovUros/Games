const currentBook = JSON.parse(localStorage.getItem('currentBook')) || [];
const title = document.querySelector('.title');
const imgWrap = document.querySelector('.img-wrapper')
const author = document.querySelector('.author');
const genre = document.querySelector('.genre');
const pages = document.querySelector('.pages');
const availability = document.querySelector('.availability');
const desc = document.querySelector('.desc');
let indicator = Math.floor(Math.random() * 2);
const homeBtn = document.querySelector('.home');
const allBooksBtn = document.getElementById('allBooksBtn');

homeBtn.addEventListener('click',() => {
    window.location.assign('index.html');
})

allBooksBtn.addEventListener('click',() => {
    window.location.assign('allBooks.html')
})

console.log(currentBook)
title.innerHTML = currentBook.title;
imgWrap.style.backgroundImage = `url(${currentBook.img})`;
author.innerHTML = currentBook.author;
genre.innerHTML = currentBook.genre;
pages.innerHTML = currentBook.pages;
desc.innerHTML = currentBook.desc;

if (indicator == 0) {
    availability.classList.remove('na');
    availability.classList.add('a');
} else {
    availability.classList.remove('a');
    availability.classList.add('na');
}
const homeBtn = document.querySelector('.home');
let booksAvailable = JSON.parse(localStorage.getItem('availableBooks')) || [];
const availableBooksList = document.querySelector('.available-books-wrapper');

homeBtn.addEventListener('click',() => {
    window.location.assign('index.html');
})

for (let i = 0; i < booksAvailable.length; i++) {
    availableBooksList.innerHTML += `<li class="book-wrapper">
    <div class="img-wrapper"></div>
    <div class="title"></div>
    <div class="bottom-wrapper">
        <div class="price-wrapper">$</div>
        <div class="icon-wrapper">
            <img src="./trolley.png" alt="" class="icon">
        </div>
    </div>
</li>`;
}

console.log(booksAvailable);

let bookWrapperList = Array.from(document.getElementsByClassName('book-wrapper'));
let imgWrapper = Array.from(document.getElementsByClassName('img-wrapper'));
let title = Array.from(document.getElementsByClassName('title'));
let priceWrapper = Array.from(document.getElementsByClassName('price-wrapper'));

for (let i = 0; i < bookWrapperList.length; i++) {
    imgWrapper[i].style.backgroundImage = `url(${booksAvailable[i].img})`;
    title[i].innerHTML += booksAvailable[i].title;
    currentPrice = Math.floor(Math.random() * (1000 - 100) + 100) / 100;
    priceWrapper[i].innerHTML += currentPrice;
    bookWrapperList[i].addEventListener('click',() => {
        localStorage.setItem('currentBook',JSON.stringify(booksAvailable[i]))
    })
}

bookWrapperList.forEach(elem => {
    elem.addEventListener('click',() => {
        window.location.assign('bookInfo.html')
    })
})




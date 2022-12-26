const newBooksList = document.querySelector('.new-books-wrapper');
const bestSellingBooksList = document.querySelector('.best-selling-books-wrapper');
const allBooksBtn = document.getElementById('allBooksBtn');
let booksLoaded = [];
let x = 0;

allBooksBtn.addEventListener('click',() => {
    window.location.assign('allBooks.html');
})

let loadBooks = async() => {
    const response = await fetch('https://api.jsonbin.io/v3/b/63a0e753dfc68e59d56c71ec/latest',
    {
        method: 'GET',
        headers: {"X-Master-Key": '$2b$10$viPOiL/.5Te1ctsEnmquLuBHKGeK09Vp0SxT2m7wkH68/e1537nUK'}
    })
    const books = await response.json();
    return books;
}

document.addEventListener("DOMContentLoaded", async () => {
    try {
        booksLoaded = await loadBooks();
    } catch(e) {
        console.log(e);
    }
    let booksList = booksLoaded.record.results
    localStorage.setItem('availableBooks', JSON.stringify(booksList))
    let highestRating = [];
    booksList.sort ((a,b) => b.rating - a.rating)
    console.log(booksList);
    highestRating = booksList.slice(0,4);
    console.log(highestRating);

    function loadNewBooks  ()  {
        let randomIndicator
        for (let i = 0; i < 4; i++ ) {
            randomIndicator = Math.floor(Math.random() * booksList.length);
            newBooksList.innerHTML += `<li class="book-wrapper">
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
        let bookWrapperList = Array.from(document.getElementsByClassName('book-wrapper'));
        let imgWrapper = Array.from(document.getElementsByClassName('img-wrapper'));
        let title = Array.from(document.getElementsByClassName('title'));
        let priceWrapper = Array.from(document.getElementsByClassName('price-wrapper'));
        let currentPrice;
        for (let i = 0; i < 4; i++) {
            let y = 0;
            y = Math.floor(Math.random() * booksList.length);
            imgWrapper[i].style.backgroundImage = `url(${booksList[y].img})`;
            title[i].innerHTML += booksList[y].title;
            currentPrice = Math.floor(Math.random() * (1000 - 100) + 100) / 100;
            priceWrapper[i].innerHTML += currentPrice;
            bookWrapperList[i].addEventListener('click',() => {
                localStorage.setItem('currentBook', JSON.stringify( booksList[y]))
            })
        }
    }

    function loadBestBooks () {
        for (let i = 0; i < 4; i++) {
            bestSellingBooksList.innerHTML += `<li class="book-wrapper--best-selling">
            <div class="img-wrapper--best-selling"></div>
            <div class="title--best-selling"></div>
            <div class="bottom-wrapper">
                <div class="price-wrapper--best-selling">$</div>
                <div class="icon-wrapper">
                    <img src="./trolley.png" alt="" class="icon">
                </div>
            </div>
        </li>`;
        }
        let bookWrapperList = Array.from(document.getElementsByClassName('book-wrapper--best-selling'));
        let imgWrapper = Array.from(document.getElementsByClassName('img-wrapper--best-selling'));
        let title = Array.from(document.getElementsByClassName('title--best-selling'));
        let priceWrapper = Array.from(document.getElementsByClassName('price-wrapper--best-selling'));
        for (let i = 0; i < 4; i++) {
            imgWrapper[i].style.backgroundImage = `url(${highestRating[i].img})`;
            title[i].innerHTML += highestRating[i].title;
            currentPrice = Math.floor(Math.random() * (1000 - 100) + 100) / 100;
            priceWrapper[i].innerHTML += currentPrice;
            bookWrapperList[i].addEventListener('click',() => {
                console.log(highestRating[i]);
                localStorage.setItem('currentBook', JSON.stringify( highestRating[i]))
            })
        }
    }

    loadNewBooks()
    loadBestBooks()
});



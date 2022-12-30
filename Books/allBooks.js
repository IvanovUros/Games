const homeBtn = document.querySelector('.home');
let booksAvailable = JSON.parse(localStorage.getItem('availableBooks')) || [];
const availableBooksList = document.querySelector('.available-books-wrapper');
const genreList = document.querySelector('.genre-list');
let availableGenre = [];
let genreWrapperList;

fetchGenre = () => {
    let test = [];
    let p;
    booksAvailable.forEach(elem => {
        p = elem.genre.split(',')
        test.push(...p)
    })
    availableGenre = [...new Set(test)];
    for (let i = 0; i < availableGenre.length; i++) {
        genreList.innerHTML += `<li class="genre-wrapper">
        <p class="genre-text">${availableGenre[i]}</p>
    </li>`;
    }
    genreWrapperList = Array.from(document.getElementsByClassName('genre-wrapper'));
    let genreArray;
    for (let i = 0; i < availableGenre.length; i++) { 
        genreWrapperList[i].addEventListener('click', () => {
            genreArray = [];
            booksAvailable.forEach(elem => {
                availableBooksList.innerHTML = '';
                if (elem.genre.includes(availableGenre[i])) {
                    genreArray.push(elem);
                }
            });
            genreArray.forEach(elem => {
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
            })

            let bookWrapperList = Array.from(document.getElementsByClassName('book-wrapper'));
            let imgWrapper = Array.from(document.getElementsByClassName('img-wrapper'));
            let title = Array.from(document.getElementsByClassName('title'));
            let priceWrapper = Array.from(document.getElementsByClassName('price-wrapper'));
            console.log(genreArray);

            for (let y = 0; y < genreArray.length; y++) {
                imgWrapper[y].style.backgroundImage = `url(${genreArray[y].img})`;
                title[y].innerHTML += genreArray[y].title;
                currentPrice = Math.floor(Math.random() * (1000 - 100) + 100) / 100;
                priceWrapper[y].innerHTML += currentPrice;
                bookWrapperList[y].addEventListener('click',() => {
                    localStorage.setItem('currentBook',JSON.stringify(genreArray[y]))
                })
                bookWrapperList.forEach(elem => {
                    elem.addEventListener('click',() => {
                        window.location.assign('bookInfo.html')
                    })
                })
            }
        });
    }
}

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

fetchGenre();

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




let booksLoaded = [];
let x = 0

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
    let highestRating = [];
    booksList.sort ((a,b) => b.rating - a.rating)
    console.log(booksList);
    highestRating = booksList.slice(0,4);
    console.log(highestRating);
});



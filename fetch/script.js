const input = document.getElementById('ingredient');
const submitBtn = document.getElementById('submit');
const recepieList = document.querySelector('.recepie-list');
const cover = document.querySelector('.cover');
const body = document.getElementById('body');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn-wrapper');
const modalName = document.querySelector('.name');
const modalOrigin = document.querySelector('.origin');
const tryAgainBtn = document.getElementById('tryAgain');
let ingredient;
let searchedMeals = [];

input.addEventListener('keyup', () => {
    submitBtn.disabled = !input.value; 
});

function searchIngredient(x) {
    let indicator = 0
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=').then((response) => {
        return response.json();
    }).then(data => {
        data.meals.forEach(meals => {
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meals.idMeal}`).then((response) => {
                return response.json();
            }).then(data => {
                let meals = data.meals[0];
                    for (let i = 0; i <= 20; i++) {
                        if(x == meals[`strIngredient${i}`]) {
                            searchedMeals[indicator] = meals;
                            indicator++;
                            recepieList.innerHTML += `<li class="recepie-wrapper">
                            <p class="meal-name">${meals.strMeal}</p>
                            <button class="read-more" onclick="openModal('${meals.strMeal}','${meals.strYoutube}','${meals.strArea}','${meals.strMealThumb}')">Read Me</button>
                            </li>`;
                        }
                    }
                let mealsFound = Array.from(document.getElementsByClassName('recepie-wrapper'));
                let y = 0;
                mealsFound.forEach(elem => {
                    elem.style.backgroundImage = 'url(' + searchedMeals[y].strMealThumb + ')';     
                    y++;
                });
            }).catch((err) => {
                console.log(err);
            });
        });
    }).catch((err) => {
        console.log(err);
    });
}

submit = e => {
    ingredient = input.value;
    input.disabled = true;
    submitBtn.disabled = true;
    tryAgainBtn.disabled = false;
    searchIngredient(input.value);
}

tryAgain = e => {
    input.disabled = false;
    recepieList.innerHTML = '';
}

function openModal(name,link,area,image) {
    body.style.overflow = 'hidden';
    cover.style.height = '100vh';
    cover.style.opacity = '.6';
    modal.style.margin = '0';
    closeBtn.addEventListener('click',() => {
        setTimeout(function() {
            cover.style.opacity = '0';
        },400);
        setTimeout(function() {
            cover.style.height = '0';
        },600);
        modal.style.marginTop = '-150%'
        body.style.overflow = 'visible';
    });
    let imgWrapper = document.querySelector('.img-wrapper');
    imgWrapper.addEventListener('click', () => {
        window.location.assign(link);
    });
    imgWrapper.style.backgroundImage = `url(` + image + `)`;
    modalName.innerHTML = name;
    modalOrigin.innerHTML = `Origin: ${area}`;
}
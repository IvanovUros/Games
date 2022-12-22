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
const prep = document.querySelector('.prep');
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
                            <button class="read-more" onclick="openModal('${meals.strMeal}','${meals.strYoutube}','${meals.strArea}','${meals.strMealThumb}','${meals.idMeal}')">Read Me</button>
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

submit = () => {
    ingredient = input.value;
    input.disabled = true;
    submitBtn.disabled = true;
    tryAgainBtn.disabled = false;
    searchIngredient(input.value);
    submitBtn.style.backgroundColor = 'rgb(175, 173, 173)';
    submitBtn.style.translate = '0';
    setTimeout(function() {
        submitBtn.style.backgroundColor = 'white';
        submitBtn.style.translate = '1px';
    },150);
}

tryAgain = e => {
    input.disabled = false;
    recepieList.innerHTML = '';
    tryAgainBtn.style.backgroundColor = 'rgb(175, 173, 173)';
    tryAgainBtn.style.translate = '0';
    setTimeout(function() {
        tryAgainBtn.style.backgroundColor = 'white';
        tryAgainBtn.style.translate = '1px';
    },150);
}

function openModal(name,link,area,image,id) {
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
    watchVideo = () => {
        window.location.assign(link);
    }
    searchedMeals.forEach(elem => {
        if(id == elem.idMeal) {
            prep.innerHTML = elem.strInstructions;
        }
    })
    let imgWrapper = document.querySelector('.img-wrapper');
    imgWrapper.style.backgroundImage = `url(` + image + `)`;
    modalName.innerHTML = name;
    modalOrigin.innerHTML = `Origin: ${area}`;
}
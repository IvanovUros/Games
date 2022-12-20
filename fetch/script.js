const input = document.getElementById('ingredient');
const submitBtn = document.getElementById('submit');
const recepieList = document.querySelector('.recepie-list');
const cover = document.querySelector('.cover');
const body = document.getElementById('body');
let ingredient;
let searchedMeals = [];

input.addEventListener('keyup', () => {
    submitBtn.disabled = !input.value; 
});

function searchIngredient(x) {
    // let searchedMeals = [];
    let indicator = 0
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=').then((response) => {
        return response.json();
    }).then(data => {
        // console.log(data)
        data.meals.forEach(meals => {
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meals.idMeal}`).then((response) => {
                return response.json();
            }).then(data => {
                const meals = data.meals[0];
                    for (let i = 0; i <= 20; i++) {
                        if(x == meals[`strIngredient${i}`]) {
                            searchedMeals[indicator] = meals;
                            indicator++;
                            console.log(meals.strInstructions);
                            recepieList.innerHTML += `<li class="recepie-wrapper">
                            <p class="meal-name">${meals.strMeal}</p>
                            <button class="read-more" onclick="openModal('${meals.idMeal}','${meals.strMeal}','${meals.strInstructions}')">${meals.strInstructions}</button>
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
    console.log(input.value);
    ingredient = input.value;
    input.disabled = true;
    submitBtn.disabled = true;
    searchIngredient(input.value);
}

function openModal(x,y,z) {
    body.style.overflow = 'hidden';
    cover.style.height = '100vh';
    cover.style.opacity = '.6';
    // console.log(searchedMeals);
    console.log(x);
    console.log(y);
    console.log(z);
    // console.log(w);
}

cover.addEventListener('click',() => {
    cover.style.height = '0';
    body.style.overflow = 'visible';
})




const input = document.getElementById('ingredient');
const submitBtn = document.getElementById('submit');
const recepieList = document.querySelector('.recepie-list');
let ingredient;

input.addEventListener('keyup', () => {
    submitBtn.disabled = !input.value; 
});

let searchedMeals = [];
let t = 0
function searchIngredient(x) {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=').then((response) => {
        return response.json();
    }).then(data => {
        data.meals.forEach(meals => {
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meals.idMeal}`).then((response) => {
                return response.json();
            }).then(data => {
                // console.log(data.meals[0]);
                data.meals.forEach(meals => {
                    for (let i = 0; i <= 20; i++) {
                        if(x == meals[`strIngredient${i}`]) {
                            searchedMeals[t] = meals;
                            t++;
                            recepieList.innerHTML += `<li class="recepie-wrapper">
                            <p class="meal-name">${meals.strMeal}</p>
                            <button class="read-more" onclick="openModal()">ReadMore
                            </li>`
                        }
                    }
                });
                let test = Array.from(document.getElementsByClassName('recepie-wrapper'));
                let u = 0
                test.forEach(test => {
                    test.style.backgroundImage = 'url(' + searchedMeals[u].strMealThumb + ')';       
                    u++;    
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
    searchIngredient(input.value);
    
}

function openModal() {
    console.log(11);
}


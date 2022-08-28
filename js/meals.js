const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = (meals) => {
    const mealsContainer = document.getElementById('meal-container');
    mealsContainer.innerHTML = ``;
    console.log(meals);
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div onclick = "loadMealDetail(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
      </div>
        `
        mealsContainer.appendChild(mealDiv);
        })
}

const searchFood = () =>{
    const serachField = document.getElementById('search-feild');
    const searchText = serachField.value;
    loadMeals(searchText);
    serachField.value = '';
}

const loadMealDetail = (idMeal) =>{
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
//   console.log(url);
  fetch(url)
  .then(res => res.json())
  .then(data => displayMealDeatails(data.meals[0]))
}

const displayMealDeatails = meal => {
    const detailContainer = document.getElementById('detail-container');
    detailContainer.innerHTML = ``;
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    `
    detailContainer.appendChild(div);

}

loadMeals('');

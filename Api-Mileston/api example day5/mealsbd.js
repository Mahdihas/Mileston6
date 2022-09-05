
const loadQuote = (search) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url) 

        .then(response => response.json())
        .then(date =>displayMeals(date.meals))
    
    

}
const displayMeals = (meals) => {
  console.log(meals)
       
  const mealsContainer = document.getElementById('meal-container');
  mealsContainer.innerHTML = ' ';
    meals.forEach(meal => {
       
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
      
        <div onclick="loadMealDetail(${meal.idMeal})" class="card ">
          <img src="${meal.strMealThumb}" class="card-img-top img-fluid" alt="...">
          <div class="card-body bg-dark text-white">
            <h5 class="card-title">Card title ${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
          </div>
        </div>
     
        `
        mealsContainer.appendChild(mealDiv)
        
    })
    

}

const searchFood = () => {
  const seaarchField = document.getElementById('search-field');
  const searText = seaarchField.value;
  loadQuote(searText)
  seaarchField.value = ' ';

  


}
// const loadMealDetail= idMeal => {
//   const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
//   fetch(url)
//     .then(res => res.json())
//     .then(data=>  mealDetail(data.meals[0]))

  



// }
// const mealDetail = meal => {
//   const detailContainer = document.getElementById('detail-container');
//   detailContainer.innerHTML = ' ';
//   const mealDivs = document.createElement('div');
//   mealDivs.classList.add('card');
//   mealDivs.innerHTML = `
//   <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title ${meal.strMeal}</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
  
   
//   `
//   detailContainer.appendChild(mealDivs);
  

// }
loadQuote('')



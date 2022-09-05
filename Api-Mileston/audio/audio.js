


document.getElementById('spring').style.display = 'none';
// document.getElementById('error').style.display = 'block'


const loadAudio = (search,dataLimit) => {
  

 
  
    
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
    .then(res=>res.json())
    .then(data => displayAudio(data.drinks,dataLimit))
    document.getElementById('spring').style.display = 'none';
  

}  


const displayAudio = (drinks,dataLimit) => {

  // document.getElementById('error').style.display = 'none'

  

  
  document.getElementById('spring').style.display = 'none';
    

    const audioContainer = document.getElementById('images-container');
    audioContainer.innerHTML = ' ';

    const showAll = document.getElementById('show-all');

    if (dataLimit && drinks.length >6 ) {
      drinks = drinks.slice(0, 6);
      showAll.classList.remove('d-none')

      
  }
  else {
      showAll.classList.add('d-none')
      
  };


  
  
   
  const noPhone = document.getElementById('nophone-massege');
   if(drinks == null){
    noPhone.classList.remove('d-none');
   }
   else {
    noPhone.classList.add('d-none');
  };



   

    drinks.forEach(drink => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="col  ">
                  <div class="card">
                    <img src="${drink .strDrinkThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                    
                      <p class="card-text" > Name : ${drink.strDrink}</p>

                      <button onclick="loadDetails('${drink.idDrink}')"  class="btn btn-primary py-2 px-4" data-bs-toggle="modal" data-bs-target="#exampleModal">Details</button>
                    </div>
                  </div>
                </div>
        `
    audioContainer.appendChild(div)
    
    
        
    })
}

const loadDetails = (idDrink) => {

  document.getElementById('spring').style.display = 'block';
      
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayDetails (data.drinks[0]))
}
const displayDetails = (drink) => {
  document.getElementById('spring').style.display = 'none';
  console.log(drink)
  const modal = document.getElementById('exampleModalLabel');
  modal.innerText =`Id : ${drink.idDrink} ` 
  const ModalBody = document.getElementById('modal');
  ModalBody.innerHTML = `
  <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">

    <p> Category :     ${drink.strCategory} </p>


  `



}

document.getElementById('btn-search').addEventListener('click', function () {
  search (6)
   

  
})




document.getElementById('search-field').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    search(6);
  }
});

document.getElementById('btn-showAll').addEventListener('click', function () {
    
  search()


})


const search = (dataLimit) => {
    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value;
    loadAudio(searchValue,dataLimit);
  
  

    


}


// loadAudio(' ')




















// const loadAudio = (search) => {
    
//     const url = `https://theaudiodb.com/api/v1/json/2/search.php?s=${search}`;
//     fetch(url)
//     .then(res=>res.json())
//     .then(data=>displayAudio(data.artists))
// }


// const displayAudio = (audius) => {
//     console.log(audius)
    

//     const audioContainer = document.getElementById('images-container');
//     audioContainer.innerHTML = ' ';

   

//     audius.forEach(audio => {
//         const div = document.createElement('div');
//         div.innerHTML = `
//         <div class="col  ">
//                   <div class="card">
//                     <img src="${audio.strArtistThumb}" class="card-img-top" alt="...">
//                     <div class="card-body">
                    
//                       <p class="card-text">${audio.strLabel}</p>
//                     </div>
//                   </div>
//                 </div>
//         `
//     audioContainer.appendChild(div)
    
    
        
//     })
// }
// const search = () => {
//     const searchField = document.getElementById('search-field');
//     const searchValue = searchField.value;
//     loadAudio(searchValue);
//     searchField.value = ' ';
    

    


// }


// loadAudio(' ')
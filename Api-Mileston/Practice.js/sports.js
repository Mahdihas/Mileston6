

const loadAllsports = () => {
    url = (`https://www.thesportsdb.com/api/v1/json/2/all_sports.php`)
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayAllSports(data.sports))

}

const displayAllSports = (sports) => {
   

    const sportsContainer = document.getElementById('sports');
    console.log(sports)

    sports.forEach(sport => {
        const sDiv = document.createElement('div');
        sDiv.innerHTML = `
        <div class="col">
        <div class="card h-100">
          <img src="${sport.strSportThumb} " class="card-img-top" alt="...">
          <div class="card-body">
          <h4 class="card-title">Name : ${sport.strSport } </h4>


          
        
          <p class="card-text">Descripton : ${sport.strSportDescription.slice(0,100)}  </p>
          <p class="card-text">Sports Format : ${sport.strFormat} </p>
         


        

          
          
          
            </div>
        </div>
      </div>
        
        `
        sportsContainer.appendChild(sDiv);
        






    })
    

}


const searchFood = () => {
    const seaarchField = document.getElementById('search-field');
    const searText = seaarchField.value;
    loadAllsports (searText)
    seaarchField.value = ' ';
  
    
  
  
  }
loadAllsports();
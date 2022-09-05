

// const loadAllsports = (search) => {
//     url = (`https://www.thesportsdb.com/api/v1/json/2/search_all_leagues.php?c=${search}`)
//     fetch(url)
//     .then(res=>res.json())
//     .then(data=>displayAllSports(data.countries))

// }

// const displayAllSports = (sports) => {
   

//     const sportsContainer = document.getElementById('sports');
//     console.log(sports)
//     sportsContainer.innerHTML = ' ';

//     sports.forEach(sport => {
//         const sDiv = document.createElement('div');
//         sDiv.innerHTML = `
//         <div class="col">
//         <div class="card h-100">
//           <img src="${sport.strBadge} " class="card-img-top" alt="...">
//           <div class="card-body">
//           <h4> League${sport.strLeague}</h4>


          
        
//           <p class="card-text">Descripton : ${sport.strDescriptionEN.slice(0,100)}  </p>
         


        

          
          
          
//             </div>
//         </div>
//       </div>
        
//         `
//         sportsContainer.appendChild(sDiv);
        






//     })
    

// }


// const searchFood = () => {
//     const seaarchField = document.getElementById('search-field');
//     const searText = seaarchField.value;
//     loadAllsports (searText)
//     seaarchField.value = ' ';
  
    
  
  
//   }
// loadAllsports(' ');



const loadAllsports = async(searText) => {

  
  
    const url = (`https://www.thesportsdb.com/api/v1/json/2/search_all_leagues.php?c=${searText}`);
    const res = await fetch(url)
        
    const data = await res.json() 
    displayAllSports(data.countries)
}

const displayAllSports = (sports) => {
 

  const sportsContainer = document.getElementById('sports');
  console.log(sports)
  sportsContainer.innerHTML= '';

  sports.forEach(sport => {
      const sDiv = document.createElement('div');
      sDiv.innerHTML = `
      <div class="col">
      <div class="card h-100">
        <img src="${sport.strBadge} " class="card-img-top" alt="...">
        <div class="card-body">
        <h4> League${sport.strLeague}</h4>


        
      
        <p class="card-text">Descripton : ${sport.strDescriptionEN.slice(0,100)}  </p>
       


      

        
        
        
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
loadAllsports(' ');







const loadFemale = () => {
    
    const url = ('https://randomuser.me/api/?results=20')
    fetch(url)
    .then(res=>res.json())
    .then(date=>displayFemale (date.results))
}


const displayFemale = (results) => {
    console.log(results)
    const randomContainer = document.getElementById('random');

    results.forEach(datas => {



         
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="col">
              <div class="card h-100">
                <img src="${datas.picture.thumbnail}" class="card-img-top" alt="...">
                <div class="card-body">
                <h4 class="card-title">Name : ${datas.name.first}</h4>


                
                <h5 class="card-title">Location :</h5>
                <p class="card-text">Street : ${datas.location.street.name} </p>
                <p class="card-text">Coordinates : ${datas.location.coordinates.latitude} </p>
                <p class="card-text">Timezone : ${datas.location.timezone.description} </p>


              

                
                
                
                  </div>
              </div>
            </div>
         
        `

        randomContainer.appendChild(div);

        
   




    })
    


      




}

loadFemale()


//


// const loadFemale = () => {
    
//     const url = ('https://randomuser.me/api/?gender=female')
//     fetch(url)
//     .then(res=>res.json())
//     .then(date=>displayFemale (date))
// }


// const displayFemale = (datas) => {
//     console.log(datas)
//     const randomContainer = document.getElementById('random');


        
//         const div = document.createElement('div');
//         div.innerHTML = `
//         <div class="col">
//               <div class="card h-100">
//                 <img src="${datas.results[0].picture.thumbnail}" class="card-img-top" alt="...">
//                 <div class="card-body">
//                 <h4 class="card-title">Name : ${datas.results[0].name.first}</h4>

//                   <h5 class="card-title">Location :</h5>
//                   <p class="card-text">Street : ${datas.results[0].location.street.name} </p>
//                   <p class="card-text">Coordinates : ${datas.results[0].location.coordinates.latitude} </p>
//                   <p class="card-text">Timezone : ${datas.results[0].location.timezone.description} </p>


                
                
                
                
//                   </div>
//               </div>
//             </div>
         
//         `

//         randomContainer.appendChild(div);





// }

// loadFemale()
const loadData = () => {
     
    const url = ('https://randomuser.me/api/')
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayUsers(data.results[0]))
} 

const displayUsers = (person) => {

    console.log(person)
    const { name,email, picture, location } = person;
    const { street} =location
    const userContainer = document.getElementById('user-container');
    userContainer.innerHTML = `
    <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${picture.large}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Name : ${name.first}</h5>
          <p class="card-text">Location : ${street.number},${street.name}</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
    
    `


    

}
// loadData();
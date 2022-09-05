const person = {
    found:2,
    message:"Found 2 persons",
    result:[
      {
          name: {
              common: "John",
              fullName: ["John", "Doe"]
            },
            age: 32,
            isMale: false,
            address: {
              street: "13/A St Joseph",
              house: 10,
            },
      },
      {
          name: {
              common: "Humayoun",
              fullName: ["Humayoun", "Kabir"]
            },
            age: 33,
            isMale: false,
            address: {
              street: "13/A St Lucia",
              house: 11,
            },
      },
    ]
};
  
const { found, message, result } = person;

result.forEach(single => {

  console.log(single)
  const cardContainer = document.getElementById('card-container')
  const Div = document.createElement('col');
  Div.innerHTML = `
  <div class="col">
  <div class="card">
    <img src="{}" class="card-img-top" alt="...">
    <div class="card-body shadow-lg">
      <h5 class="card-title">Car Name: ${single.name.common}</h5>
      <p class="card-text">Car Detail: ${single.address.house}</p>

      <button class="btn btn-primary">Age: ${single.age}</button>

    </div>
  </div>
</div>

  
  
  `

  cardContainer.appendChild(Div)
  

})

document.getElementById('results-found').innerText = message;
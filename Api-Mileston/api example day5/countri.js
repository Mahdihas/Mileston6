const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
    .then(data=>displayCountries(data))
    


}
const displayCountries = countries => {
    // for (const country of countries) {
        

    //     console.log(country)
    // }
  const countriesContaienr = document.getElementById('countries-container')
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('list')
        countryDiv.innerHTML = `

        <h3>Name:${country.name.common}
        </h3>
        <p>capital : ${country.capital ? country.capital[0] : 'No capital'}</p>
        <button onclick="loadCountyDetails('${country.cca2}')"> details</button>
        `
        countriesContaienr.appendChild(countryDiv)

        
    }
    )



}
const loadCountyDetails = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
        .then(res => res.json())
         .then(data=>displayCountrydetails(data[0]))


} 

const displayCountrydetails = country => {
    console.log(country)
    const countryDetail = document.getElementById('country-details');
    countryDetail.innerHTML = `
    <h2>Details :  ${country.name.common} </h2>
    <img src="${country.flags.png} "></img>
    `
    
    

}
loadCountry()

const loadPhone = async(searchFieldValue,dataLimit) => {
    

    const url = (`https://openapi.programming-hero.com/api/phones?search=${searchFieldValue}`);
    const res = await fetch(url)
        
    const data = await res.json() 
    displayPhone (data.data,dataLimit)
}


const displayPhone = (phones,dataLimit) => {
    
    console.log(phones)

    const phoneContaienr = document.getElementById('phone-container');
    phoneContaienr.innerText = ' ';
    const showAll = document.getElementById('show-all');

    if (dataLimit && phones.length > 10) {
        phones = phones.slice(0, 10);
        showAll.classList.remove('d-none')

        
    }
    else {
        showAll.classList.add('d-none')
        
    }
    

    const noPhone = document.getElementById('nophone-massege');
    if (phones.length === 0) {
        noPhone.classList.remove('d-none')
    }
    else {
        noPhone.classList.add('d-none')
    }


    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        
        phoneDiv.classList.add('col')
        phoneDiv.innerHTML = `
        <div class="col">
        <div class="card">
          <img src="${phone.image}" class="card-img-top p-2" alt="...">
          <div class="card-body">
            <h5 class="card-title">Phone Name : ${phone.phone_name}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <button onclick="loadPhoneDetails('${phone.slug}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Show Details</button>
          </div>
        </div>
      </div>
        
        `
        phoneContaienr.appendChild(phoneDiv);

        



    })
    toggleSpinner(false);
}


// process
const processSearch = (dataLimit) => {
    const searchField = document.getElementById('search-field');
    toggleSpinner(true);
    const searchFieldValue = searchField.value;
    loadPhone(searchFieldValue,dataLimit)
    searchFieldValue.value = ' ';

    

}

document.getElementById('btn-search').addEventListener('click', function () {
    processSearch(10)

})


// search input field enter key handler
document.getElementById('search-field').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        processSearch(10);
    }
});


//
const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');

    if (isLoading) {
       loaderSection.classList.remove('d-none')
    }
    else {
        loaderSection.classList.add('d-none')
    }
} 

/// stop spiner loaders

// not the best way ot show all

document.getElementById('btn-showAll').addEventListener('click', function () {
    
    processSearch()


})

const loadPhoneDetails = async id => {
    
    const url  = (` https://openapi.programming-hero.com/api/phone/${id}`)
    const res  = await fetch(url);
    const data = await res.json();
    displayPhoneDetails(data.data)
}


const displayPhoneDetails = phone => {
    console.log(phone)
    const modalTitle = document.getElementById('phoneDetailModalLabel');
    modalTitle.innerText = phone.name;
    const phoneDiv = document.getElementById('phone-details');
    phoneDiv.innerHTML = `
    <p>Realese Date : ${phone.releaseDate}</p>

    <p>Storage : ${phone.mainFeature? phone.mainFeature.storage : 'no storage'}</p>
    <p>Others : ${phone.others? phone.others.Bluetooth :'NO ohters information'} </p>
    `
    
    

}

//  loadPhone()
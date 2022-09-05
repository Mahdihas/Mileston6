const loadAllProduct = async () => {
    
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;

}

const setAllMenu = async () => {
    // loadAllProduct()
    // .then(data=>console.log(data))
    const data = await loadAllProduct()
    // console.log(data)
    const menu = document.getElementById('all-menu')
    const unique = [];

    for (product of data) {
        // console.log(unique.indexOf(product.category))

        
        // console.log(product)
        if (unique.indexOf(product.category) === -1) {
            unique.push(product.category)
            const li = document.createElement('li');

            li.innerHTML = `
          <li><a>${product.category}</a></li>
        
        `
        menu.appendChild(li)
            
            
        }
        
    }
    // console.log(unique)

      

}
setAllMenu()
 
// document.getElementById('button').addEventListener('click', function () {
  
//     const searchField = document.getElementById('search-field')
//     searchField.addEventListener('click', async (event) => {
        
            
//             // console.log(searchField.value)
//             const searchValue = searchField.value;
//             const allProducts = await loadAllProduct();
//             console.log(allProducts)
    
   
        
        
    
//     })
    
    
   
  
// })

const searchField = document.getElementById('search-field')
searchField.addEventListener('keypress', async (event) => {
    if (event.key === 'Enter') {
        
        // console.log(searchField.value)
        const searchValue = searchField.value;
        const allProducts = await loadAllProduct();
        // console.log(allProducts)
       

        const foundProducts = allProducts.filter(product => product.category.includes(searchValue))
        
        // console.log(foundProducts)
        const productsContainer = document.getElementById('products-container');
        productsContainer.textContent = ' ';
        if (foundProducts.length === 0) {
            console.log('kldkdikdi')
        }

        foundProducts.forEach(product => {
             
            const { category,image,title,} = product
            const div = document.createElement('div');
            div.innerHTML = `
                                <div class="card bg-base-100 shadow-xl">
                    <div class="card-body">
                    <figure><img class="h-60 w-full" src="${image}" alt="Shoes" /></figure>
                        <h2 class="card-title">Title ${category}</h2>
                        <p>Description ${title.slice(0,20)+ '...'}</p>
                    </div>
                   
                    </div>
            
               
            `
            productsContainer.appendChild(div);

        
        })
        
    
    }

})


// loadAllProduct ()





// const loadAllProduct = async () => {
    
//     const response = await fetch('https://fakestoreapi.com/products');
//     const data = await response.json();
//     return data;

// }

// const setAllMenu = async () => {
//     // loadAllProduct()
//     // .then(data=>console.log(data))
//     const data = await loadAllProduct()
//     console.log(data)


// }
// setAllMenu ()
// // loadAllProduct ()
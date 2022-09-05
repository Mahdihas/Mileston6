// // fetch('https://jsonplaceholder.typicode.com/users')
// // .then(res => res.json())
// // .then(data=>console.log(data))
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(error => console.log(error));

// try {
     
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json();
//     console.log(data);
// }
// catch{

// }


// console.log(1)
// setTimeout(() => {
    

//     console.log(2)
// }, 5000)
// console.log(5)


const phones = [
  { name: "sony", price: 500 },
  { name: "apple", price: 700 },
  { name: "sony", price: 700 },
];
const mid =  phones.find((phone)=> phone.price===500

)
console.log(mid)

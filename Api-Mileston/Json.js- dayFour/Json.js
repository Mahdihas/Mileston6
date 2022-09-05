// const obj = {
//     name :   'mahdi',
//     age  :    23,
//     address: 'Khortoil',
//     work: 'bekar'
// }
// console.log(obj);
// const strings = JSON.stringify(obj);
// console.log(strings);
// const parse = JSON.parse(strings);
// console.log(parse);
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => console.log(response))
// //   .then(json => console.log(json))



// // fetch('')
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//     .then(json => console.log(json))
// fetch('');

const url = 'https://jsonplaceholder.typicode.com/todos/1';
function loadData() {
    fetch(url)
    .then(response => response.json())
    .then(Json => console.log(Json));



}

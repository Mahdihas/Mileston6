const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];

//find give just one number
const fives = numbers.find(num => num % 5 == 0)
const fivesAll = numbers.filter(num => num % 5 == 0)

console.log(fivesAll)

const products = [
    { id: 1, name: 'labtop', price: 65000 },
    { id: 1, name: 'phone', price: 80000 },
    { id: 1, name: 'pc', price: 30000 },
    { id: 1, name: 'computer', price: 23000 }
]
const cheap = products.find(product => product.price < 40000);
console.log(cheap);
const numbers = [12, 56, 87, 44];
const half = numbers.map(n => n * 2);
const third = numbers.map(x => x / 3);

// console.log(third);
// console.log(half);

const friend = ['Tom hand', 'tom bddy', 'Tom cruise', 'Tom solaiman'];
const firstLetters = friend.map(friend => friend[0]);
// console.log(firstLetters) 
const nameLength = friend.map(friends => friends.length);
// console.log(nameLength)

const producs = [
    { id: 1, name: 'labtop', price: 5000 },
    { id: 1, name: 'labtop', price: 5000 },
    { id: 1, name: 'labtop', price: 5000 },
    { id: 1, name: 'labtop', price: 5000 }

];
// const items = producs.map(product => console.log(product.name));
const items = producs.map(product => product.name);
// console.log(items);

const friends = ['Tom hand', 'tom bddy', 'Tom cruise', 'Tom solaiman'];

friends.forEach(friend => {
    

});



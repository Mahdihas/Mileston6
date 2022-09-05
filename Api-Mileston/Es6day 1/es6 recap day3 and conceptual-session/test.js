const numbers = [12, 32, 25, 75, 13, 54, 97, 25];

const names = ['abul', 'babul', 'mehedy', 'jakariya', 'jack', 'sakib'];
// numbers.forEach(item => console.log(item*2));
let a = numbers.forEach(item => item * 2);
// console.log(a)





// map give us an array
// numbers.map(korim=> console.log(korim))
// numbers.map(korim=> console.log(korim *2))
let b = numbers.map(korim => korim * 2);
// console.log(b)
// find giv just one 
const mark = [12, 32, 25, 75];
const result = mark.find(item => item > 20)
console.log(result)
// filter see us as a array 
const boro = [12, 32, 25, 75];
const get = boro.filter(item => item > 20)
console.log(get)

const boro1 = mark.filter(item => item > 20 && item % 2 === 0);
console.log(boro1);

console.log(21 % 2)



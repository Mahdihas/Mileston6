const bottle = { color: 'yellow', price: 50, isCleaned: true };
// property
const keys = Object.keys(bottle)
// console.log(keys)
// value
const values = Object.values(bottle);
// console.log(values)
// key and value with together
const pair = Object.entries(bottle);
// console.log(pair)

// freeze can't do anythin
Object.freeze(bottle)
// seal can't delete and can't set new poperty
Object.seal(bottle)
bottle.price = 1000;
bottle.height = 12;
// delete 
delete bottle.isCleaned;
console.log(bottle)


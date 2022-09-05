
// for of for array
// const numbers = [12, 54, 65, 3, 54];
// for (let number of numbers) {
    
//     console.log(number)
// }

// for in for Object
const bottles = { color: 'yellow', price: 50, isCleaned: true };

// for(const bottle in bottles) 
//     console.log(bottle)
const keys = Object.keys(bottles);
// console.log(keys)
for (let key of keys) {
    // console.log(key)
}

// 3 ways to read object poperty

// bottle.color
// bottle ['color]
// bottle [ key]

//value and poperty together
for (let key of keys) {
    // console.log(key,bottles[key])
}


for (const key in bottles) {
    console.log(bottles[key],key)
}
// 
const pain = Object.entries(bottles);
console.log(pain)
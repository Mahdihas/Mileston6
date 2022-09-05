const max = Math.max(12, 23, 39, 40, 59);
console.log(max);


//array max number
// const arr = [1, 3, 9999, 5, 6, 7];
// const maxArrayValue = Math.max.apply(this, arr);
// console.log(maxArrayValue);

const maxarr = [12, 23, 39, 40, 59];
const arrmaxnumber = Math.max(...maxarr);
console.log(...maxarr);
console.log(arrmaxnumber);


const number2 = [...maxarr];
maxarr.push(55);
console.log(maxarr);

console.log(number2)

const number3 = [...maxarr];
number3.push(60)
console.log(number3);
const number4 = [20, 10, ...maxarr, 111];
console.log(number4);

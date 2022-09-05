//normal
function run(x) {
    return x * 2;
}
// console.log(run(5))

//aarow
// const add = (x) =>x*2;
const add1 = x =>x*2;
// console.log(add1(5))

// we can't get when we use multiline
// const add = (x, y) => {
//      x + y;

    

// }
// console.log(add(2, 5))
//we have to write return
// const add = (x, y) => {
//     return x + y;

   

// }
// console.log(add(2,5))

const add = (x=0, y=0) => {
    return x + y;

   

}
console.log(add())



const square = x => {
    const result = x.map(item => item ** 2)
    return result;
}

// 2^2 =4

// 2*2 = 4

const x = [2, 3, 4,6]

console.log(square(x));



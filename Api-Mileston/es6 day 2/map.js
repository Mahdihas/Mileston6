const numbers = [2, 3, 6, 8, 4];
const output = [];




function getdoubles(numbers) {

for (const number of numbers) {
    const duouble = doubleIt(number);
    output.push(duouble);
    

    }
    return output;

    
}
//give the *work to function
// function doubleIt(number) {
//     return number * 2;
    
// }
// * with array function

const doubleIt = num => num * 2;
const makeDouble = numbers.map(doubleIt);
const makeDoubleDirect = numbers.map(num => num * 2);
const makeDoubleDirect2 = numbers.map(x => x * 2);
const fiveTimes = [1, 2, 3, 4, 5].map(x => x * 5);
console.log(fiveTimes)





console.log(getdoubles(numbers));
console.log(makeDouble)
console.log(makeDoubleDirect)

console.log(makeDoubleDirect2)




// // function calculateSalary(salary, tax= 0.25, bonus=0) {
// //     const remaining = salary - salary * tax;
// //     const total = remaining + bonus;
// //     return total;
    

// // }
// console.log(calculateSalary(100,100,10))


//templateString
const elementHTML = `


`
//arrow function

const duoubleIt = x => x * 2;
// console.log(duoubleIt(2))


// multiple paremeter
const salary2 = (salary, tax, bonus) => salary - salary * tax + bonus;
// console.log(salary2(1000, 0.30, 0))
// spread array 
const age = [10, 20, 30, 50];
const newAges = [...age, 500, 400,];
// console.log(newAges);

//distructuring
const { x, y, ...z} = { x: 45, y: 12, z: 33, name: 'sakibul', salary: 4000 };
// console.log(x, y, z)

//distructuring array
const [a, b, ...r] = [20, 30, 20, 80, 50];
// console.log(a,b,r)

//practice 1
const multipy = (x, y, z) => x * y * z;
// console.log(multipy(5, 5, 5));
//practice 1/2
const lineSentence = `
I am a web developer.
I love to code.
I love to eat biryani.

`;
// console.log(lineSentence)1/3

const arrayFunction = (x, y = 5) => x + y;
// console.log(arrayFunction(10));


//practice 2/1
const friends = ['Md Hafiz', 'Pranta Ray', 'Md Yeasir', 'Rubel', 'Sakib', 'Santo'];

const evenArray = [];
const arrayFriends = friends => {
    for (const friend of friends) {
        // Step - 2
        if(friend.length % 2 === 0){
            evenArray.push(friend);
        }
    }
    return evenArray;
}

console.log(arrayFriends(friends));

const friend = ['mahdi hasan', 'mamun rashid', 'kodu miya', 'zihad laskar', 'mahmud'];

const arrayEmty = [];
const arrayfriend = friend => {
    for (const friends of friend) {
        if (friends.length % 2 === 0) {
            arrayEmty.push(friends);
        }
          
      }
    return arrayEmty;
}
// console.log(arrayfriend(friend));

//3/1
// const numbers = [5, 7, 4, 10, 22, 30, 25, 27, 35, 15];
// let sum = 0;
// let average = 0;
// const arrayNumbers = numbers => {
//     for (const number of numbers) {
//         // Step - 1
//         const numberSqr = Math.pow(number, 2);
//         // Step - 2
//         sum = sum + numberSqr;
//         // Step - 3
//         average = sum / numbers.length;
//     }
//     return average;
// }

// console.log(arrayNumbers(numbers));
//4


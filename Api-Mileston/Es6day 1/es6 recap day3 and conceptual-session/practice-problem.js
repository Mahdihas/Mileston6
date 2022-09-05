//1
// const nikName  = 'mahdi';
// const fullName = `${nikName} Hasan`;
// console.log(fullName)

//2
// const obj = {
//     name: 'Mahdi',
//     full: 'Hasan',
//     age: 23,
//     love: 'single'
    
// };
// const details =`${obj.name + " " + obj.full} age: ${obj.age} `
// console.log(details)

//3.1
// const arrowone = (a) => a / 5;
// const result = arrowone(20);
// console.log(result);
//3.2
// const arrow = (a, b) => (a + 2) * (b + 2);
// console.log(arrow(5, 5));
// const multiply = (num1 , num2)=>{
//     let add1 = num1 + 2;
//     let add2 = num2 + 2;
//     let sum = add1 + add2;
//     let multi = sum * 2;
//     return multi;
// }
// console.log(multiply(2,2));

//3.3
// const threeParemeter = (a, b, c) => a * b * c;
// console.log(threeParemeter(2, 2, 2));
//3,4
// const towArrow = (a, b) => {
//     const number = 2;
//     const one  = a + number;
//     const two  = b + number;
//     const into = one * two;
//     return into;

// }
// console.log(towArrow(10, 10));

// //5
// const arr = [1, 2, 3, 4, 5];
// const fiveTimes =arr.map(x => x * 5);

// console.log(fiveTimes)
// 6
// const arr = [1, 2, 3, 4, 5, 20, 10, 40, 33];
// const findOdd = arr.filter(a => a %2 ===1  );
// console.log(findOdd)
//7.1
// const arrObj = [
     
//     {
//         phone: 10,
//         name: 'sympony',
//         price: 4500
//     },
//     {
//         phone: 10,
//         name: 'sympony',
//         price: 35000
//     },
//     {
//         phone: 10,
//         name: 'sympony',
//         price: 35000
//     }
    
// ];
// const find = arrObj.find(prices => prices.price === 35000);
// console.log(find)
 
///* ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো।  */

const findArray = [
    {   
        productID : 1,
        productName : 'laptob',
        price : '$2000'
        
    },
    {
        productID : 2,
        productName : 'desktop',
        price : '$3000'
    },
    {
        productID : 3,
        productName : 'monitor',
        price : '$5000'
    },
    {
        productID : 4,
        productName : 'macBookPro',
        price : '$5000'
    }
];
const find = findArray.find(prices => prices.price ==='$5000')
// console.log(find)
// const myArray = [2,3,4,5,6,7,8,22];
// const [,,three] = myArray;
// console.log(three);

const object = {
    name : 'nahid Hassan asif',
    age : 24,
    class : 14,
    hairColor : 'black',
    eyecolor : 'black',
    height : '5 feet 6 inch'
}
const {name,height} = object;
console.log(name,height);

// can't reassign the const variable but can push
const number = [
    30, 50, 40, 20
]
// number = [
//     20, 4, 05, 39
// ]
number.push('100')

number[1] = 500;
// number.pop();
console.log(number)


//obj
const student = {
    name: 'mofiz',
    village : 'rongpur'
}
// student = { name: "mofaazal" } can't do this
student.name = "mofaazal"
console.log(student)
let sum = 0;

for (let i = 0; i < number.length; i++){
    

    const numbers = number[i];
    sum = sum + numbers;
    console.log(sum)
}


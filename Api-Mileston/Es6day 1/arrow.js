 // arrow function for two paremeters

// const add = (first, second) => first + second;
//     const fullname = (first, last) => first + " "+ last;
//     console.log()

//     const multiply = (a, b) => a * b;
//     console.log(multiply(10, 2));

// arrow more than 3 ;
// const add = (a, b, c, d, e) => a + b + c + d + e;
// console.log(add(2,2,2,2,3))


// without paremeter
// const add = () => 3939;
// console.log(add());
// single paremeter
// const add = (num) => num * 2;
// console.log(add(2, 2));
//simple version
// const add = num => num * 2;
// console.log(add(2,2))

// multiple parameters
const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondtSum = x + z;
    const multiple = firstSum * secondtSum;
    const multipleD = multiple / 2;
    return multipleD;


}

function getSum(a, b = 9) { return a + b; } console.log(getSum(2, 7));


const y = x => x * x; const z = y(5); console.log(z)

const nayikas = ['mousumi', 'popy', 'shabnur', 'purnima'];
const nayika2 = [...nayikas];
console.log(nayikas)
const cars = ['toyota', 'honda', 'mercedes']; const newCars = [...cars, 'ferrari']; 
console.log(newCars)





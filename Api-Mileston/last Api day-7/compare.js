// const first = { a: 2 };
// const second = { a: 2 };
//
// const third = second
// // third === second
// if (first === second) {
//     // console.log('there sam')
// }
// else {
//     // console.log('thay are not sam')
// }

// do not use this to compare object

const first = { a: 2 , c:4 , l:6, b:2};
const second = { a: 2, b: 3, m:7, c: 4 };

const firstString = JSON.stringify(first)
console.log(firstString);
const secondString = JSON.stringify(second);
console.log(secondString)
if (firstString === secondString) {
    // console.log('there sam')
}
else {
    // console.log('thay are not sam')
}


function compareObject(first, second) {
    
    const firstKey = Object.keys(first);
    const secondKey = Object.keys(second);
    if (firstKey.length === secondKey.length) {
        for (const key of firstKey) {
            if (first[key] !== second[key]) {
            return false
        }
        }
        return true
    }
    else{return false}
}
const isSame = compareObject(first, second);
console.log(isSame);
const fish = {
    name: 'king Hilsa',
    home: 'chandapur',
    color: 'silver',
    Phone :'01916606015',
    price: '400'
}
// console.log(typeof parseFloat( fish.Phone))
// const Phoe = fish.Phone;

// console.log(Phoe)

// const { Phone } = fish;
// console.log(Phone);
// const { name } = fish;
// console.log(name);


//Important same variable name and obj name;

const { age,name,profession } = {
    name : ' Almas' , age : 23 , profession: 'makeup artist'
}
console.log(profession);


// array distruturing

const [arr] = [20, 30, 40, 50];
console.log(arr);

//another array
const nayoks = ['sakib', 'bappi', 'raj'];
const [kins, lost, notun] = nayoks;
console.log(notun)

//
function getNames ( ){
    return ['Alim', 'Halim']
}
const [baba, caca] = getNames();
console.log(caca)


//1

const Obj = {
    person: 'wow',
    school: 'madrasa',
    name: {
        full: 'mahdi hasan',
        nickName: 'tuhin'
    },
    Address: [
        'khartoil',
        10,
        {
            name: 'boro'
        }
    ],
    Fun: function () {
        return this.person
      
    
    }



}
let result = Obj.Fun();
// console.log(result)

//2

const Wow = ` Person : ${Obj.person},HOuse${Obj.Address[2].name}


`

// console.log(Wow)
//3.1
const number1 =  ()=> 79;
// console.log(number1())
//3.2
const number = x => x / 17;
// console.log(number(34))

//3.3
const number2 = (x, z) => (x + z) / 2;
// console.log(number2(10,10))
//৩.৪
const number3 = (x, z) => {
    let sum1 = x + 7;
    let sum2 = z + 7;
    let sum = sum1 + sum2;
    return sum;
    

}
// console.log(number3(10,10))



// console.log(number2(10,10))
//4
// const arr1 = [21, 28, 35, 42, 56];
// const maparr = arr1.map(x => x / 7);
// console.log(maparr)
/*/6 সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল
 হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর
  destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড 
  পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।
/*/
const obj = { name: 'tuhin', phone: '0093493', id: 10, };
const { name, phone, id } = obj;
// console.log(id)

const arr = [10, 20, 40, 50,];
const [one, balance,...c] = arr;
// console.log(c) 





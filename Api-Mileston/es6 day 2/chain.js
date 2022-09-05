
//1
const users = [
    {id:23, name:'aboul', profession:'doctore'}
]
// console.log(users[0].name);

//2
const date = {
    count: 500,
    date: [{ id: 1, name: 'badsa', job: 'foreign' },
    { id: 2, name: 'sadsa',job:'business' }
    ]
}
// console.log(date.date[1].name)

const user = {
    id: 5000,
    name: 'tomas alva edison',
    add: {
        street: {
            firts:  '35 by a',
            second: 'third floor',
            sid:    'right side'

               
           }
    },

    post: 'cantorment',
    city: 'dhaka'

}
const userFloor = user;
console.log(userFloor.add?.stre?.second);
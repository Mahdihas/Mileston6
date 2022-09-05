// 1.scic
// const students = [
//     { name: "mehedy bro", email: 'mehedy@gamil.com', avg: 56, fiftyPercent: true },
//     { name: "rokib bro", email: 'rokib@gamil.com', avg: 57, fiftyPercent: false },
//     { name: "sakib bro", email: 'sakib@gamil.com', avg: 42, fiftyPercent: false },
//     { name: "sojib bro", email: 'sojib@gamil.com', avg: 52, fiftyPercent: true },
//     { name: "sunny bro", email: 'sunny@gamil.com', avg: 32, fiftyPercent: false },
//     { name: "saki bro", email: 'sunny@gamil.com', avg: 37, fiftyPercent: true },
//     { name: "jackie bro", email: 'jackie@gamil.com', avg: 57, fiftyPercent: true }
// ]

// const result = students.filter(student => student.avg >= 50 && student.fiftyPercent===true);
// // console.log(result)
// result.map(odhom =>{
//     // console.log(odhom);
//     const { name, email } = odhom;
//     console.log(name,email)

// })

//2.stable jamai
// const polapain = [
//     { Name: "Abul", job: 'sorkari', salary: 17000 },
//     { Name: "Babul", job: 'besorkari', salary: 25000 },
//     { Name: "Kabul", job: 'sorkari', salary: 21000 },
//     { Name: "Habul", job: 'besorkari', salary: 47000 },
//     { Name: "Jabul", job: 'sorkari', salary: 23000 },
//     { Name: "Mabul", job: 'besorkari', salary: 55000 }
// ]

// //  find stable jamai .. sorkari + 20000   or    besorkari + 40000

// const selected = polapain.filter(pola => pola.job === 'sorkari' && pola.salary >= 20000 || pola.job === 'besorkari' && pola.salary >= 40000)

// // console.log(selected)

// selected.map(vaggoban => {
//     console.log(vaggoban.Name);
// })

//3.accessAPI.js /
const Students = [
    {
        student1: {
            name: 'abul',
            age: '17',
            isMale: true,
            education: {
                class: 7,
                subjects: ['bangla', 'english', 'math'],
                school: 'durgapur high school',
                marks: {
                    bangla: 35,
                    english: 23,
                    math: 36
                }
            }
        },
        student2: {
            name: 'jarina',
            age: '19',
            isMale: false,
            education: {
                class: 6,
                subjects: ['bangla', 'english', 'math'],
                school: 'Rajshahi high school',
                marks: {
                    bangla: 95,
                    english: 73,
                    math: 36
                }
            }
        },
        student3: {
            name: 'habul',
            age: '15',
            isMale: true,
            education: {
                class: 9,
                subjects: ['bangla', 'english', 'math'],
                school: 'Dhaka high school',
                marks: {
                    bangla: 75,
                    english: 53,
                    math: 96
                },
            }
        }
    }
]

// console.log(Students[0].student1.education.subjects)
Students.map(student => {
    for (let i in student) {
        const { name, age, isMale, education } = student[i];

        const { subjects } = education;

        const information = `
        My Name is ${name}.
        My age is ${age}.
        My gender is ${isMale === true ? "Male" : 'Female'}
        My subjects are: ${subjects.map(subject => subject)}
        `

        console.log(information);

    }
})




// 4. objcetttod
const Persons = [
    { id: 'ID01', name: "abul vai", age: 23 },
    { id: 'ID02', name: "babul vai", age: 43 },
    { id: 'ID03', name: "habul vai", age: 54 },
    { id: 'ID04', name: "jabul vai", age: 29 }
]



// expected output
// {
//     ID01:"abul vai",
//      ID02: 'babul vai',
//      ID03: 'habul vai',
//      ID04: 'jabul vai'
// }

const info = {}

// obj.name= 'Mehedy';
// obj['name'] = "Mehedy"

Persons.map(person => {
    info[person.id] = person.name
})

console.log(info.ID02);






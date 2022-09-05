const kodomAli = {
    name: 'kodomalit',
    study: 9,
    money: 5000,
    subjects: ['calulas', 'algebra',],
    exam: function () {
        
        return this.name + ' ' + 'dlkedie'
    },
    exanImprovment:  function(subjects) {
        
        this.exam();
        return `${this.name} lkdleekdkd ${subjects}`
    },
    treatDay: function (amount,boksis) {
        
        this.money = this.money - amount-boksis
        return this.money
    }
    

}
const result = kodomAli.exam();
// console.log(result)

const badamAli = {

    name: 'kacha badam',
    money: 8000
}
const result2 = kodomAli.exam.call(badamAli)
// console.log(result2)
const badamMoney = kodomAli.treatDay.call(badamAli, 400, 40);
// console.log(badamMoney)
// apply

const badamMoney2 = kodomAli.treatDay.apply(badamAli, [1000, 100]);
console.log(badamMoney2)

// bind
const badamAliTreat = kodomAli.treatDay.bind(badamAli);
const remaining = badamAliTreat(1000, 100); 
 console.log(remaining)
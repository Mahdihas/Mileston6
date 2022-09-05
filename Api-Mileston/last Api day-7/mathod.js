const studen = {
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
let output = studen.exam()
console.log(output)
const reexam = studen.exanImprovment('algebra');
console.log(reexam)
const remaining = studen.treatDay(900,200);
console.log(remaining)
// console.log(this)
const kodomAli = {
    name: 'kodomalit',
    study: 9,
    money: 5000,
    subjects: ['calulas', 'algebra',],
    exam: function () {
        
        console.log(this)

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

kodomAli.exam()
getGirlFriend = (name = "chokina") => "name"; console.log(getGirlFriend()); 

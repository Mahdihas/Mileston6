const loadUserFech = () => {
    const url = 'https://randomuser.me/api/?gender=female'
    fetch(url)
        .then(res => res.json())
        .then(date => displayUser(date.results[0].name.first))
        .catch(console => console.log(error))
    

}
const displayUser = user => {
    console.log(user)
}
const loadUserAsynck = async () => {
    const url = 'https://randomuser.me/api/?gender=female'

    try {
        const res = await fetch(url);
        const data = await res.json();
        displayUser(data.results[0].name.first)
    }
    catch (error) {
        console.log(error)
        
    }



}
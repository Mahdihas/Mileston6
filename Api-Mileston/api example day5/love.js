const loadFetch = () => {
    
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(date=> displayUser(date.results))

}
const displayUser = user => {
    
    const usersContainer = document.getElementById('users-container');
    // console.log(user)
    for (const users of user) {
        console.log(users)
        const userDiv = document.createElement('div');
        userDiv.innerHTML = `
        <h3>UsrName:</h3>
        <p>Usr INfo :</p>
        <p>userLocation: ${users.location.city} ${users.location.country}<</p>
        <p>userName: ${users.name.first}<</p>

        `
        usersContainer.appendChild(userDiv)
        userDiv.classList.add('list')
        
    }
}
loadFetch()
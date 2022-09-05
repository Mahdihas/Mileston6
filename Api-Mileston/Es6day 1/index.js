document.getElementById('apply-bg').addEventListener('click', function () {

    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        
        console.log(friend)
        friend.style.backgroundColor = 'lightblue'
    }


    // console.log(friends)
    


})
document.getElementById('center-third').addEventListener('click', function () {

    const third = document.getElementById('third-friend').style.textAlign = 'center'
    

    


})
document.getElementById('add-friend').addEventListener('click', function () {
    
    const friedsContainer = document.getElementById('friends');
    const friend = document.createElement('div');
    friend.classList.add('friend')
    friend.innerHTML = `
    <h3   id="third-friend" class="friend-name">Friend-3</h3>
                <p>somthing new addes nam?</p>
    
    `
    friedsContainer.appendChild(friend)

})


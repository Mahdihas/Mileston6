function loadData2() {
    
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
    .then(json => console.log(json))
fetch('');



}
function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
    .then(json => displayUsers(json))
fetch('');

}
function displayUsers(data) {
    console.log(data)
    
}
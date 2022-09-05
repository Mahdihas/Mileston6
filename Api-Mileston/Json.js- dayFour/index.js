
// // function loadUsers2(data) {
    
// //     //     fetch('https://jsonplaceholder.typicode.com/users')
// //     //         .then(response => response.json())
// //     //         .then(data => {
// //     //             const ul = document.getElementById('users-list');
// //     //         for (let users of data) {
// //     //             console.log(users.name)
// //     //             const li = document.createElement('li');
// //     //             li.innerText = `mahdi : ${users.name}`;
// //     //             ul.appendChild(li);
// //     //         }
    
    
// //     //         })
            
// //     // }
    


// function loadUsers2() {
    
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//          .then(data=>displayUsers2(data))

// }

// function displayUsers2(data) {
//     const ul = document.getElementById('users-list');
//     for (let users of data) {
//         console.log(users.name)
//         const li = document.createElement('li');
//         li.innerText = `mahdi ${users.name}`;
//         ul.appendChild(li);
//     }
   
// }


// function deletePost() {
    
//     fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'DELETE',
// });
// }
// function patchAPost() {
    

//     fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PATCH',
//   body: JSON.stringify({
//     title: 'foo',
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// }

// function creatAPost() {
    

//     fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// }

const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
console.log(stuInfo.name);
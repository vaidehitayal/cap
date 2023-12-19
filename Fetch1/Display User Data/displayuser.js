document.getElementById("fetchuserbtn").addEventListener('click',fetchUsers);

function fetchUsers(){
    fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(data => {
        // console.log(data.data);

        let output ='';
        data.data.forEach(ele=>{
            console.log(ele)

        output += `
        <div class="user-card">
                <img src="${ele.avatar} " alt="user avatar">
                <div class="user-details">
                    <span class="name">${ele.first_name}</span>
                    <span class="email">${ele.email}</span>
                </div>
            </div>
        `
        })
        document.getElementById('userlist').innerHTML = output;
    })
    .catch(function(err){
        console.log(err)
    })
}
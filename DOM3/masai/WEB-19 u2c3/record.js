// fill in javascript code here
// fill in javascript code here
let myform = document.querySelector("form")
myform.addEventListener("submit",function(e){
    e.preventDefault();
    let name= document.getElementById("name").value;
    let id = document.getElementById("employeeID").value;
    let specialization= document.getElementById("department").value;
    let exp = document.getElementById("exp").value;
    let email = document.getElementById("email").value;
    let mobileno = document.getElementById("mbl").value;

    let role;

    if(exp>5){
        role ="Senior"
    }
    else if(exp>=2 && exp<=5){
        role ="Junior"
    }

    else{
        role ="Fresher"
    }

let tbody = document.querySelector("tbody")
let row = document.createElement("tr")
let data = [name,id,specialization,exp,email,mobileno,role]

data.forEach((ele)=>{
    let td = document.createElement("td")
    td.innerText=ele
    row.appendChild(td)
})

let deleteid = document.createElement("td")
let deletebtn = document.createElement("button")
deletebtn.innertext = "Delete"
deletebtn.addEventListener("click",function(){
    tbody.removeChild(row)
})

deleteid.appendChild(deletebtn)
row.appendChild(deleteid)
tbody.appendChild(row)


})


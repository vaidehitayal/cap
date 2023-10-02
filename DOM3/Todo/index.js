let myform = document.querySelector("form")
let inptask = document.getElementById("task")
let priorityselect = document.getElementById("priority")

let AllTask = []
let tbody = document.querySelector("tbody")

myform.addEventListener("submit",function(e){
    e.preventDefault();
    Data={
        input : inptask.value,
        priority : priorityselect.value,

    }

    AllTask.push(Data);

    tbody.innerHTML=""

    AllTask.map((ele)=>
    {
        const tr = document.createElement("tr")

        let td1= document.createElement("td")
        let td2= document.createElement("td")

        td1.innerText= ele.input
        td2.innerText = ele.priority

        tr.append(td1,td2)

        tbody.append(tr)
    })
})
const myList = document.querySelector("ul#tl");
const searchBar = document.querySelector("input#searchBar");
const addBtn = document.querySelector("button#addBTN");
const addInput = document.querySelector("input#addBar");
const sBadge = document.querySelector("span.bg-success");
const wBadge = document.querySelector("span.bg-warning");
let counter = 1;

myList.addEventListener("click", (e) => {
    if (e.target.nodeName == ("BUTTON") && e.target.classList.contains("btn-danger")){
        e.target.parentNode.remove();
    }
    else if(e.target.nodeName == ("I") && e.target.classList.contains("fa-trash-can")){
        e.target.parentNode.parentNode.remove();
    }
    else if(e.target.nodeName == ("BUTTON") && e.target.classList.contains("btn-success")){
        sBadge.innerText = "Compeleted! " + counter++;
        e.target.parentNode.remove();
    }
    else if(e.target.nodeName == ("I") && e.target.classList.contains("fa-circle-check")){
        sBadge.innerText = "Compeleted! " + counter++;
        e.target.parentNode.parentNode.remove();
    }
    
})

addBtn.addEventListener("click", (e)=>{
    const newTaskDiv = document.createElement("div");
    newTaskDiv.classList.add("row","btn-group","list-group-horizontal","p-1");

    const newTaskLi = document.createElement("li");
    newTaskLi.classList.add("list-group-item","col-sm-8");
    newTaskLi.innerText = addInput.value;
    newTaskDiv.appendChild(newTaskLi);

    const newTaskSuccessBtn = document.createElement("button");
    newTaskSuccessBtn.classList.add("btn","btn-success","col-sm-2");
    newTaskDiv.appendChild(newTaskSuccessBtn);

    const newTaskRemoveBtn = document.createElement("button");
    newTaskRemoveBtn.classList.add("btn","btn-danger","col-sm-2");
    newTaskDiv.appendChild(newTaskRemoveBtn);

    const newTaskRemoveIcon = document.createElement("I");
    newTaskRemoveBtn.classList.add("fa-regular","fa-trash-can");

    const newTaskSuccessIcon = document.createElement("I");
    newTaskSuccessBtn.classList.add("fa-regular","fa-circle-check");

    newTaskDiv.appendChild(newTaskRemoveBtn);
    myList.appendChild(newTaskDiv);
    addInput.value = "";
})


searchBar.addEventListener("input",{
    
})
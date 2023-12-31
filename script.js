let checkBtn = document.querySelectorAll("div .btn-success");
let delBtn = document.querySelectorAll("div .btn-danger");
const addBtn = document.querySelector("button#addBTN");
const addBar = document.querySelector("input#addBar");
const myList = document.querySelector("ul#tl");
const searchBar = document.querySelector("input#searchBar")
let searchItem = null;



let tasks = [];

addBtn.addEventListener("click", (e) => {
    let newTask = addBar.value;
    tasks.push(newTask);
    addBar.value = null;
    myList.innerHTML = null;
    render();
})

searchBar.addEventListener("input", e => {
    searchItem = null;
    searchItem = e.target.value;
    if(searchItem){
    search(searchItem)};
  });


function render() {
    tasks.forEach(element => {
        
        myList.innerHTML +=`<div class="row btn-group list-group-horizontal p-1">
        <li class="list-group-item col-md-8">${element}</li>
        <button btn-id="sbtn" type="button" class="btn btn-success col-md-2"><i class="fa-solid fa-check"></i></button>
        <button btn-id="dbtn" type="button" class="btn btn-danger col-md-2"><i class="fa-solid fa-trash"></i></button>
    </div>
`

    })
}

function search(searchElement){
tasks.forEach(element=>{
        if(element.includes(searchElement)){
            myList.innerHTML +=`<div class="row btn-group list-group-horizontal p-1">
        <li class="list-group-item col-md-8">${element}</li>
        <button btn-id="sbtn" type="button" class="btn btn-success col-md-2"><i class="fa-solid fa-check"></i></button>
        <button btn-id="dbtn" type="button" class="btn btn-danger col-md-2"><i class="fa-solid fa-trash"></i></button>
    </div>
`
        }
})
}
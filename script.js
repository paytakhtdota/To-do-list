
const addBtn = document.querySelector("button#addBTN");
const addBar = document.querySelector("input#addBar");
const myList = document.querySelector("ul#tl");
const searchBar = document.querySelector("input#searchBar")
let searchItem;

let tasks = [];

addBtn.addEventListener("click", (e) => {   // a trigger for add new task to Tasks array and start render();
    tasks.push(addBar.value);
    addBar.value = null;
    render(tasks);
})

searchBar.addEventListener("input", e => {
    searchItem = null;
    serachItem = e.target.value;
    search(tasks,serachItem);
  });

function render(data) {  // Function to render new row with client Data

    myList.innerHTML = "";  // make empty myList ul#tl before add new HTML codes
    data.forEach((element,index) => {
    const listItemDiv = document.createElement("div");
    listItemDiv.classList.add("row","btn-group","list-group-horizontal","p-1");

    const listItemText = document.createElement("li");
    listItemText.classList.add("list-group-item","col-sm-8",);
    listItemText.innerText = element;
    listItemDiv.appendChild(listItemText);

    const checkBtn = document.createElement("button");
    checkBtn.classList.add("btn","btn-success","col-sm-2");
    checkBtn.dataset.id = index;
    checkBtn.textContent = "✓";
    listItemDiv.appendChild(checkBtn);

    const delBtn = document.createElement("button");
    delBtn.classList.add("btn","btn-danger","col-sm-2");
    delBtn.dataset.id = index;
    delBtn.textContent = "✕";
    listItemDiv.appendChild(delBtn);

    myList.appendChild(listItemDiv);   //append Div to ul
    })
}

function search(array,searchElement){
    let matchItems=[];
    array.forEach(element=>{
     if(element.includes(searchElement)){
        matchItems.push(element);
        render(matchItems);
    }
})
}
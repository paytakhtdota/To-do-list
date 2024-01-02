
const addBtn = document.querySelector("button#addBTN");
const addBar = document.querySelector("input#addBar");
const myList = document.querySelector("ul#tl");
const searchBar = document.querySelector("input#searchBar")
let searchItem;
let doneCounter = 0; // count when click on checkBtn

let tasks = []; // an array to store the tasks

addBtn.addEventListener("click", (e) => {   // a trigger for add new task to Tasks array and start render();
    tasks.push(addBar.value);
    addBar.value = null;
    render(tasks);

})

searchBar.addEventListener("input", e => {  // event lisener for search Bar; it will trigger evry time the value of input change
    searchItem = null;
    searchItem = e.target.value;
    search(tasks, searchItem);
});

function search(array, searchElement) {  // a function to find any tasks that match to search result 
    let result= [];
    if (searchBar.value.length == 0){render(tasks)}else{ // if search bar is empty no need to search! and after earse litter from input it should show tasks again!
        // esle; in put is not empty so now we start search process
    array.forEach(element => {  // check to 
        if (element.includes(searchElement)) {
            result.push(element);
        }
    })

    if(result.length == 0){
        myList.innerHTML = "";
        const noMatch = document.createElement("div");
        noMatch.classList.add("alert","alert-danger");
        noMatch.innerHTML = " <strong>No Match Item </strong> Unfortunately, we were unable to find the item you searched for."
        myList.appendChild(noMatch);


    }else{render(result);}
}
}
     //render the results of search


function render(data) {  // Function to render new row with client Data

    myList.innerHTML = "";  // make empty myList ul#tl before add new HTML codes
    document.querySelector("header div span.bg-success").innerText = "Compeleted : " + doneCounter;
    document.querySelector("header div span.bg-warning").innerText = "In Progress : " + tasks.length;

    data.forEach((element, index) => {  //forEach for create a li for each of element in the array
        const listItemDiv = document.createElement("div");
        listItemDiv.classList.add("row", "btn-group", "list-group-horizontal", "p-1");

        const listItemText = document.createElement("li");
        listItemText.classList.add("list-group-item", "col-sm-8",);
        listItemText.innerText = element;
        listItemDiv.appendChild(listItemText);

        const checkBtn = document.createElement("button");
        checkBtn.classList.add("btn", "btn-success", "col-sm-2");
        checkBtn.dataset.id = index;     // assign an id to each bottun to handel it latter bia Event listener 
        checkBtn.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
        listItemDiv.appendChild(checkBtn);

        const delBtn = document.createElement("button");
        delBtn.classList.add("btn", "btn-danger", "col-sm-2");
        delBtn.dataset.id = index;   // assign an id to each bottun to handel it latter bia Event listener 
        delBtn.innerHTML = `<i class="fa-regular fa-trash-can"></i>`;
        listItemDiv.appendChild(delBtn);

        myList.appendChild(listItemDiv);   //append Div to ul

        checkBtn.addEventListener("click", jobDone)
        delBtn.addEventListener("click", cancelTask)


    })
}




function jobDone(event) {   // to handel bottun for remove an Item from list
    tasks.splice(event.target.dataset.id, 1);
    doneCounter++;
    render(tasks);
}

function cancelTask(event) {    // to handel bottun for remove an Item from list
    tasks.splice(event.target.dataset.id, 1);
    render(tasks);
}

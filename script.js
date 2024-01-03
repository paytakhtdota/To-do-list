const myList = document.querySelector("ul#tl");
const searchBar = document.querySelector("input#searchBar");
const addBtn = document.querySelector("button#addBTN");
const addInput = document.querySelector("input#addBar");
const sBadge = document.querySelector("span.bg-success");
const wBadge = document.querySelector("span.bg-warning");
let counter = 1;

myList.addEventListener("click", (e) => {
    if (e.target.nodeName == ("BUTTON") && e.target.classList.contains("btn-danger")) {
        e.target.parentNode.remove();
        if (myList.children.length == 0) { noResult() }
    }
    else if (e.target.nodeName == ("I") && e.target.classList.contains("fa-trash-can")) {
        e.target.parentNode.parentNode.remove();
        if (myList.children.length == 0) { noResult() }
    }
    else if (e.target.nodeName == ("BUTTON") && e.target.classList.contains("btn-success")) {
        sBadge.innerText = "Compeleted! " + counter++;
        e.target.parentNode.remove();
        if (myList.children.length == 0) { noResult() }
    }
    else if (e.target.nodeName == ("I") && e.target.classList.contains("fa-circle-check")) {
        sBadge.innerText = "Compeleted! " + counter++;
        e.target.parentNode.parentNode.remove();
        if (myList.children.length == 0) { noResult() }
    }

})



addBtn.addEventListener("click", (e) => {
    if (!addInput.value) { return; }

    if (document.querySelector("ul#tl div.alert-info")) {
        document.querySelector("ul#tl div.alert-info").remove()
    }

    myList.appendChild(createNewElement(addInput.value)); // function to add new elements
    addInput.value = ""; // after add a new Element; input bar will be empty 
})



searchBar.addEventListener("input", (e) => { // this event lisener will execute when value of search input change.
    if (document.querySelector("ul#tl div.alert-info")) { return; } // this check if there is not any element to search ; stop function
    if (document.querySelector("ul#tl div.alert-danger")) { document.querySelector("ul#tl div.alert-danger").remove() }
    // it remove the danger alert (it popup when : there is not any match result for search) 
    let arrayList = Array.from(myList.children);
    // property children return a HTMLcolection; for apply forEach, it converted to an array 
    arrayList.forEach(element => {  // forEach to check innerText of evey element to check it match with search or not
        if (element.querySelector("li.list-group-item").innerText.toLowerCase().includes(e.target.value.toLowerCase())) {
            element.style.display = "flex"; //  <= it match
        }
        else {
            element.style.display = "none";//  <= it not match ; display changed to none to disapper the element
            let detector = 0;
            Array.from(myList.children).forEach(items => {
                if (items.style.display == "none") {            // this forEach count how many element is not match
                    detector++;                                 // if detector == arrayList.length it will call 
                }                                               // for function to create an alert element
                if (detector == arrayList.length && !document.querySelector("ul#tl div.alert-danger")) { noMatch() }
            })
        }
    })
})

const noResult = function () { //create an alert there is no task 
    myList.innerHTML = "";
    const infoAlert = document.createElement("div");
    infoAlert.classList.add("alert", "alert-info");
    infoAlert.innerHTML = " <strong>No More Task</strong> There is no more task, add new tasks"
    myList.appendChild(infoAlert);
}

const noMatch = function () {
    const dangerAlert = document.createElement("div");
    dangerAlert.classList.add("alert", "alert-danger");
    dangerAlert.innerHTML = " <strong>No Match</strong> Unfortunetly we were not able to find any match task."
    myList.appendChild(dangerAlert);

}

function createNewElement(text) {  // Create a new task
    const newTaskDiv = document.createElement("div");
    newTaskDiv.classList.add("row", "btn-group", "list-group-horizontal", "p-1");

    const newTaskLi = document.createElement("li");
    newTaskLi.classList.add("list-group-item", "col-sm-8");
    newTaskLi.innerText = text;
    newTaskDiv.appendChild(newTaskLi);

    const newTaskSuccessBtn = document.createElement("button");
    newTaskSuccessBtn.classList.add("btn", "btn-success", "col-sm-2");
    newTaskDiv.appendChild(newTaskSuccessBtn);

    const newTaskRemoveBtn = document.createElement("button");
    newTaskRemoveBtn.classList.add("btn", "btn-danger", "col-sm-2");
    newTaskDiv.appendChild(newTaskRemoveBtn);

    const newTaskRemoveIcon = document.createElement("I");
    newTaskRemoveBtn.classList.add("fa-regular", "fa-trash-can");
    newTaskRemoveBtn.appendChild(newTaskRemoveIcon);

    const newTaskSuccessIcon = document.createElement("I");
    newTaskSuccessBtn.classList.add("fa-regular", "fa-circle-check");
    newTaskSuccessBtn.appendChild(newTaskSuccessIcon);

    return newTaskDiv; // return a DIV with a text and 2 button
}


var add = document.getElementById("add");

var txt = document.getElementById("txt")

var container = document.getElementById("c")




// variable to keep tasks count
var count = 0;

var tasks = document.getElementById("tasks")



add.addEventListener("click",()=>{
    var content = txt.value

    // task shouldn't be empty otherwise it will show an alert message!
    if(content==""){
        alert("please fill the Task!")
        return;
    }

    // for getting time and date
    var date = new Date()
    
    // variable to keep time and date when task added
    var time = date.toDateString()+ " " + date.toLocaleTimeString();
    // creating time/date element
    var t = document.createElement('h6')
    t.innerHTML = time;
    
    // creating new task element
    var newTask = document.createElement('div');

    newTask.className = "txtbox"

    newTask.innerHTML = `<input type="checkbox" name="" id="checkBox" onclick="check(this)">
    <input type="text" name="" id="txt" value="${content}" readonly>
            
    <button class="btn" id="Edit" onclick="editTask(this)">Edit</button>
    <button class="btn" id="Remove" onclick="removeTask(this)">X</button>
    `;

    // appending created elements to container
    container.appendChild(t);
    container.appendChild(newTask);

    // after task has been added
    txt.value=""
    count+=1
    tasks.innerText = count + " tasks left";
    
    
})

// function for checking task completed or not
function check(e){
    if(e.checked==true && count!=0){
        count-=1
        tasks.innerText = count + " tasks left";
        e.parentElement.style = "border:2px solid green;"
    }
    else{
        count+=1
        tasks.innerText = count + " tasks left";
        e.parentElement.style = "border: 2px solid rgb(107, 107, 107);"

    }
    

}

// function to remove task
function removeTask(e){
    
    e.parentElement.previousElementSibling.remove();
    e.parentElement.remove();
    if(count!=0){
        count-=1
    }
    tasks.innerText = count + " tasks left";
}

// function to edit task
function editTask(e){
    if(e.innerHTML=="Edit"){
        e.innerHTML = "Save";
        e.previousElementSibling.removeAttribute("readonly","readonly")
        e.previousElementSibling.focus()
    }
    else{
        e.innerHTML = "Edit";
        e.previousElementSibling.setAttribute("readonly","readonly")
    }
}











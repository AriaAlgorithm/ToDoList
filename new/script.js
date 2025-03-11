const input_box = document.getElementById('input_box');
const AddBtn = document.getElementById('AddBtn');
const todolist = document.getElementById('todolist');


const Addtodo = () => {
    const inputText = input_box.value.trim();

    // Prevent adding empty tasks
    if (inputText.length <= 0) {
        alert("No task added");
        return;
    }

        
    else {
        // If we're adding a new task
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerHTML = inputText;
        li.appendChild(p);
        todolist.appendChild(li);
        input_box.value = "";
        

       

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Remove";
        deleteBtn.classList.add("btn", "deleteBtn");
        li.appendChild(deleteBtn);

        saveLocalTodo(inputText);
    }
};

const updateTodo = (e) => {
    if (e.target.innerHTML === "Remove") {
        todolist.removeChild(e.target.parentElement);
    }

    
};

const saveLocalTodo=(todo)=>{
    let todos = [];
    todos.push(todo);
    console.log(todo);
}

AddBtn.addEventListener('click', Addtodo);
todolist.addEventListener('click', updateTodo);
todolist.addEventListener("click", function(e){
     if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
     }
     
     
},false)

const push = document.querySelector('#push');
const newtaskInput = document.querySelector('#newtask input');
const tasks = document.querySelector('#tasks');

function addTask(){
    if(newtaskInput.value.length===0){
        alert("Please Enter a Task");
    }
    else{

        const task = document.createElement('div');
        task.className = 'task';
        task.innerHTML = `<span id="taskname">
            ${newtaskInput.value}
        </span>
        <button class="delete">
            <i class="far fa-trash-alt"></i>
        </button>`

        tasks.appendChild(task);


        newtaskInput.value = "";  
    }
}

push.addEventListener( 'click', addTask);

newtaskInput.addEventListener('keypress',(event)=>{
    if(event.key==='Enter'){
        addTask();
    }
})

tasks.addEventListener('click', function(event) {
    
    const deleteButton = event.target.closest('.delete');
    const checked = event.target.closest('.task');

    if (deleteButton) {
        const taskToRemove = deleteButton.parentNode; // Parent is the task div
        taskToRemove.remove();
    }

    if(checked){
        checked.classList.toggle('completed');
    }
});


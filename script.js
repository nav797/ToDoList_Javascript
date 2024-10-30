const push = document.querySelector('#push');
const newtaskInput = document.querySelector('#newtask input');
const tasks = document.querySelector('#tasks');

push.addEventListener( 'click',function(){
    if(newtaskInput.value.length===0){
        alert("Please Enter a Task");
    }
    else{
        tasks.innerHTML += `
        <div class="task">
        <span id="taskname">
            ${newtaskInput.value}
        </span>
        <button class="delete">
            <i class="far fa-trash-alt"></i>
        </button>
        </div>
        `;

        newtaskInput.value = "";
        
    }
});

tasks.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete')) {
        const taskToRemove = event.target.parentNode;
        taskToRemove.remove();
    }
});


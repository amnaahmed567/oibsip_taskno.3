const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const pendingList = document.getElementById('pendingList');
const completedList = document.getElementById('completedList');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            ${taskText}
            <button class="completeBtn">Complete</button>
            <button class="deleteBtn">Delete</button>
        `;

        const completeBtn = taskItem.querySelector('.completeBtn');
        const deleteBtn = taskItem.querySelector('.deleteBtn');

        completeBtn.addEventListener('click', completeTask);
        deleteBtn.addEventListener('click', deleteTask);

        pendingList.appendChild(taskItem);
        taskInput.value = '';
    }
}

function completeTask(event) {
    const taskItem = event.target.parentElement;
    pendingList.removeChild(taskItem);
    completedList.appendChild(taskItem);
}

function deleteTask(event) {
    const taskItem = event.target.parentElement;
    if (taskItem.parentElement === pendingList) {
        pendingList.removeChild(taskItem);
    } else if (taskItem.parentElement === completedList) {
        completedList.removeChild(taskItem);
    }
}


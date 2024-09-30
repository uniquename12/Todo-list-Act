const form = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const dateInput = document.getElementById('date-input');
const todoList = document.getElementById('todo-list');

let tasks = [];

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const task = {
        id: Date.now(),
        title: taskInput.value,
        date: dateInput.value
    };
    tasks.push(task);
    renderTasks();
    form.reset();
});

function renderTasks() {
    todoList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task.date} - ${task.title}</span>
            <div>
                <button class="edit-button" onclick="editTask(${task.id})">Edit</button>
                <button class="delete-button" onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
        todoList.appendChild(li);
    });
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

function editTask(id) {
    const task = tasks.find(task => task.id === id);
    taskInput.value = task.title;
    dateInput.value = task.date;
    deleteTask(id); // Remove the task from the list to update it
}
document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from localStorage or initialize an empty array
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Function to save tasks to localStorage
    const saveTasks = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    // Function to render tasks to the DOM
    const renderTasks = () => {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            // Re-create the element in the DOM
            createTaskElement(task, index);
        });
    };
    
    // Function to create and append a single task element
    const createTaskElement = (task, index) => {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.dataset.index = index; // Store index in a data attribute
        if (task.completed) {
            taskItem.classList.add('completed');
        }

        const taskText = document.createElement('span');
        taskText.textContent = task.text;
        taskText.addEventListener('click', () => toggleComplete(index));

        const completeBtn = document.createElement('button');
        completeBtn.className = 'complete-btn';
        completeBtn.innerHTML = '<i class="fas fa-check"></i>';
        completeBtn.addEventListener('click', () => toggleComplete(index));

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
        deleteBtn.addEventListener('click', () => deleteTask(index));

        taskItem.appendChild(taskText);
        taskItem.appendChild(completeBtn);
        taskItem.appendChild(deleteBtn);

        taskList.appendChild(taskItem);
    };

    // Add a new task
    const addTask = (text) => {
        if (text.trim() === '') return;
        tasks.push({ text: text, completed: false });
        saveTasks();
        // Create just the new element instead of re-rendering everything
        createTaskElement({ text: text, completed: false }, tasks.length - 1);
    };

    // Toggle a task's completed state
    const toggleComplete = (index) => {
        tasks[index].completed = !tasks[index].completed;
        saveTasks();
        // Just update the class on the specific element
        const taskItem = document.querySelector(`.task-item[data-index='${index}']`);
        if (taskItem) {
            taskItem.classList.toggle('completed');
        }
    };

    // Delete a task (with animation)
    const deleteTask = (index) => {
        const taskItem = document.querySelector(`.task-item[data-index='${index}']`);
        if (taskItem) {
            taskItem.classList.add('fade-out');
            // Wait for the animation to finish before removing the task
            setTimeout(() => {
                tasks.splice(index, 1);
                saveTasks();
                renderTasks(); // Re-render to update indices
            }, 500); // Must match animation duration in CSS
        }
    };

    // Form submission
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
    });

    // Initial Load
    renderTasks();
});
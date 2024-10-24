let tasks = []; // Initialize an empty array to store tasks. Each task will be an object containing the text of the task and a flag indicating if it’s completed.

// Function to add a new task
const addTask = () => {
    const taskInput = document.getElementById('taskInput'); // Get the input field where the user types the task.
    const text = taskInput.value.trim(); // Get the input value and remove any extra spaces from both ends.

    // If the input has some text (i.e., not empty)
    if (text) {
        tasks.push({ text: text, completed: false }); // Add the new task to the tasks array. Each task is represented as an object with a text property and a completed status set to false by default.
        taskInput.value = ""; // Clear the input field after adding the task.
        updateTasksList(); // Call the function to update and display the updated list of tasks on the UI.
    }
};

// Function to update the list of tasks displayed on the screen
const updateTasksList = () => {
    const taskList = document.getElementById('task-list'); // Get the <ul> or <div> element where tasks will be displayed.
    taskList.innerHTML = ''; // Clear the current task list so we can redraw the updated one.

    // Loop over each task in the tasks array and create HTML elements to display them.
    tasks.forEach((task, index) => {
        const listItem = document.createElement('li'); // Create a new <li> element to represent the task in the list.

        // Create the inner HTML structure for each task item
        listItem.innerHTML = `
        <div class='taskItem'>

          <div class='task ${task.completed ? 'completed' : ''}'> <!-- If the task is completed, add the 'completed' class, otherwise leave it empty. -->
            <input type='checkbox' class='checkbox' id='checkbox'${task.completed ? 'checked' : ''} /> <!-- Checkbox to mark the task as complete or incomplete. It will be checked if the task is completed. -->
            <p>${task.text}</p> <!-- Display the task text. -->
          </div>

          <div class='icons'>
            <img src="./assets/img/edit.png" onclick="editTask(${index})" alt=""/> <!-- Icon to edit the task. It calls editTask function with the index of the task. -->
            <img src="./assets/img/bin.png" onclick="deleteTask(${index})" alt=""/> <!-- Icon to delete the task. It calls deleteTask function with the index of the task. -->
          </div>

        </div>
        `;

        // Add an event listener to the checkbox that toggles the task's completion status when checked/unchecked
        listItem.addEventListener('change', () => toggleTaskComplete(index));

        // Append the created listItem to the task list container
        taskList.append(listItem);
    });
};

// Event listener for adding a new task when the "Add Task" button is clicked
document.getElementById('newTask').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default behavior of form submission or page reload on button click.
    addTask(); // Call the addTask function to add the new task.
});





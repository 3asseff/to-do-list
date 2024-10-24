// script.js

// Select the necessary elements
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const listContainer = document.getElementById("list-container");

// Function to create a new list item
function createListItem(task) {
  const listItem = document.createElement("li");
  listItem.innerHTML = `<i class="fa-regular fa-circle"></i> ${task} 
                          <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>`;
  listItem.addEventListener("click", function () {
    const icon = this.querySelector("i");
    // Toggle between empty circle and check circle
    if (icon.classList.contains("fa-circle")) {
      icon.classList.remove("fa-circle");
      icon.classList.add("fa-circle-check");
      this.classList.add("completed");
    } else {
      icon.classList.remove("fa-circle-check");
      icon.classList.add("fa-circle");
      this.classList.remove("completed");
    }
  });

  // Add event listener for the delete button
  const deleteBtn = listItem.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent the click from bubbling to the <li>
    listItem.remove(); // Remove the list item
  });

  return listItem;
}

// Event listener for the "Add Task" button
addTaskBtn.addEventListener("click", function () {
  const task = taskInput.value.trim();
  if (task) {
    // Check if the input is not empty
    const newListItem = createListItem(task);
    listContainer.appendChild(newListItem); // Add new item to the list
    taskInput.value = ""; // Clear the input field
  }
});

// Optional: Allow pressing "Enter" to add a task
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTaskBtn.click(); // Simulate a click on the "Add Task" button
  }
});

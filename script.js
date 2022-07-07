const addBtn = document.getElementById("addTaskBtn");
const tasksContainer = document.getElementById("tasksContainer");
const inputField = document.getElementById("inputField");

addBtn.addEventListener("click", function () {
  let paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  const newTask = inputField.value;
  paragraph.innerText = `⨀    ${newTask}`;

  tasksContainer.appendChild(paragraph);

  inputField.value = "";

  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
    paragraph.innerText = `⨂    ${newTask} `;
  });
  paragraph.addEventListener("dblclick", function () {
    tasksContainer.removeChild(paragraph);
  });
});

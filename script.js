const addBtn = document.getElementById("addTaskBtn");
const tasksContainer = document.getElementById("tasksContainer");
const inputField = document.getElementById("inputField");

addBtn.addEventListener("click", function () {
  let paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  const newTask = inputField.value;

  const currentDate = new Date();
  const orario =
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();

  paragraph.innerText = `⨀    ${newTask} -  ${orario}`;

  tasksContainer.appendChild(paragraph);

  inputField.value = "";

  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
    paragraph.innerText = `⨂    ${newTask}  -  ${orario}  `;
  });
  paragraph.addEventListener("dblclick", function () {
    tasksContainer.removeChild(paragraph);
  });
});

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const list = document.getElementById("taskList");

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;
  span.onclick = () => span.classList.toggle("done");

  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.onclick = () => list.removeChild(li);

  li.appendChild(span);
  li.appendChild(delBtn);
  list.appendChild(li);

  input.value = "";
}

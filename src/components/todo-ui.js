function showTodo(proj) {
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-content");
  const todos = proj.getTodos;

    while (todoDiv.firstElementChild) {
        todoDiv.removeChild(todoDiv.firstElementChild);
    }


  todos.map((item, index) => {
    const todo = todoItem(item, index);
    todoDiv.appendChild(todo);
  });

  return todoDiv;
}

function todoItem(todo, index) {
  const item = document.createElement("div");
  item.classList.add("todo-item");
  item.id = index;
  const title = document.createElement("div");
  const description = document.createElement("div");
  const duedate = document.createElement("div");
  const priority = document.createElement("div");
  const isComplete = document.createElement("input");
  const editBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");
  const detailsBtn = document.createElement("button");
//   const dialog = todoDialog(todo);

  title.classList.add("todo-title");
  description.classList.add("todo-description");
  duedate.classList.add("todo-duedate");
  priority.classList.add(index);
  priority.classList.add("todo-priority");
  isComplete.classList.add(index);
  isComplete.classList.add("todo-iscomplete");

  title.textContent = todo.getTitle;
  description.textContent = todo.getDecription;
  duedate.textContent = todo.getDuedate;
  priority.textContent = todo.getPriority;
  isComplete.type = "checkbox";
  isComplete.name = "isComplete";
  isComplete.checked = todo.getIsComplete;
  editBtn.textContent = "Edit";
  editBtn.name = "edit";
  editBtn.classList.add(index);
  deleteBtn.textContent = "Delete";
  deleteBtn.name = "delete";
  deleteBtn.classList.add(index);
  detailsBtn.textContent = "Details";
  detailsBtn.name = "details";
  detailsBtn.classList.add(index);

  item.appendChild(title);
  item.appendChild(description);
  item.appendChild(duedate);
  item.appendChild(priority);
  item.appendChild(isComplete);
  item.appendChild(detailsBtn);
  item.appendChild(editBtn);
  item.appendChild(deleteBtn);
//   item.appendChild(dialog);

  return item;
}

export { showTodo };

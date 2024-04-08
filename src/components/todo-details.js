function todoDetails(todo) {
    const dialog = document.createElement("dialog");
    dialog.classList.add("todo-dialog");
    dialog.classList.add("dialog");
  
    const closeBtn = document.createElement("button");
    closeBtn.classList.add("close-dialog");
    closeBtn.textContent = "x";
    closeBtn.name = 'close-dialog';
  
    const title = document.createElement("div");
    const description = document.createElement("div");
    const duedate = document.createElement("div");
    const priority = document.createElement("div");
    const isComplete = document.createElement("input");


  title.classList.add('todo-details-title');
  description.classList.add('todo-details-description');
  duedate.classList.add('todo-details-duedate');
  priority.classList.add('todo-details-priority');
  isComplete.classList.add('todo-details-isComplete');

  
    title.textContent = todo.getTitle;
    description.textContent = todo.getDecription;
    duedate.textContent = todo.getDuedate;
    priority.textContent = todo.getPriority;
    isComplete.type = "checkbox";
    isComplete.name = "isComplete";
    isComplete.checked = todo.getIsComplete;
  
    dialog.appendChild(title);
    dialog.appendChild(description);
    dialog.appendChild(duedate);
    dialog.appendChild(priority);
    dialog.appendChild(isComplete);
    dialog.appendChild(closeBtn);

    dialog.setAttribute("open", "true");
    return dialog;
  }


  export {
    todoDetails
  }
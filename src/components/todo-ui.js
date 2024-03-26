function showTodo(proj) {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-content');
    const todos = proj.getTodos;

    todos.map((item,index) => {
        const todo =  todoItem(item,index);
        todoDiv.appendChild(todo);
    });
    
    return todoDiv
}

function todoItem(todo,index){
    const item = document.createElement('div');
    item.classList.add('todo-item');
    item.id = index;
    const title = document.createElement('div');
    const description = document.createElement('div');
    const duedate = document.createElement('div');
    const priority = document.createElement('div');
    const isComplete = document.createElement('input');
    
    title.classList.add('todo-title');
    description.classList.add('todo-description');
    duedate.classList.add('todo-duedate');
    priority.classList.add('todo-priority');
    isComplete.classList.add('todo-iscomplete');

    title.textContent = "Title: "+todo.getTitle;
    description.textContent = todo.getDecription;
    duedate.textContent = todo.getDuedate;
    priority.textContent = todo.getPriority;
    // isComplete.textContent = todo.getIsComplete;
    isComplete.type= 'checkbox';
    // isComplete.value = true;
    isComplete.checked = todo.getIsComplete;
    console.log(`Todo is complete: ${todo.isComplete}`);
    // isComplete.checked = false;


    item.appendChild(title);
    item.appendChild(description);
    item.appendChild(duedate);
    item.appendChild(priority);
    item.appendChild(isComplete);

    return item;

}

export {
    showTodo
}
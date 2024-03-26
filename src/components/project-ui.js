
function showProject(proj) {
  const project = document.createElement("div");
  const title = document.createElement("div");
  const description = document.createElement("div");
  const deadline = document.createElement("div");
  const todo = document.createElement("div");

  title.textContent = proj.getTitle;
  description.textContent = proj.getDescription;
  deadline.textContent = proj.getDeadline;
  todo.textContent = proj.getTodos;

  // data[index].todoList.map((item)=>{
  //     render todo via todo.js
  // });

  project.appendChild(title);
  project.appendChild(description);
  project.appendChild(deadline);
  project.appendChild(todo);

  return project;
}

export { showProject };

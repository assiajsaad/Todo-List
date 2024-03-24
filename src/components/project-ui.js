import { Data } from "../data";

const data = new Data();
const dataArray = data.getData();

console.log(`Data from project.js ${data}`);

function showProject(index) {
  const project = document.createElement("div");
  const title = document.createElement("div");
  const description = document.createElement("div");
  const deadline = document.createElement("div");
  const todo = document.createElement("div");

  title.textContent = dataArray[index].getTitle;
  description.textContent = dataArray[index].getDescription;
  deadline.textContent = dataArray[index].getDeadline;
  todo.textContent = "Render todo via todo.js";

  // data[index].todoList.map((item)=>{
  //     render todo via todo.js
  // });

  project.appendChild(title);
  project.appendChild(description);
  project.appendChild(deadline);
  project.appendChild(todo);
  console.log(`Project: ${project}`);
  return project;
}

export { showProject };

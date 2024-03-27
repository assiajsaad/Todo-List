import { showProject } from "./project-ui";
import { showTodo } from "./todo-ui";



function renderProject(proj) {
    
    const contentDiv = document.querySelector('.content');

    const lastChild = contentDiv.lastElementChild;

    if (lastChild !== null) {
      titleDiv.removeChild(lastChild);
    }
    
    contentDiv.appendChild(showProject(proj));
    contentDiv.appendChild(showTodo(proj));
    
}

export {
    renderProject
}
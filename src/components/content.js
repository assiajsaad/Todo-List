import { showProject } from "./project-ui";
import { showTodo } from "./todo-ui";



function renderProject(proj) {
    
    const contentDiv = document.querySelector('.content');
    contentDiv.appendChild(showProject(proj));
    contentDiv.appendChild(showTodo(proj));
    
}

export {
    renderProject
}
import { showProject } from "./project-ui";




function renderProject() {
    
    const contentDiv = document.querySelector('.content');
    contentDiv.appendChild(showProject(0));
}

export {
    renderProject
}
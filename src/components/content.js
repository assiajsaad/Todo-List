import { showProject } from "./project-ui";




function renderProject(proj) {
    
    const contentDiv = document.querySelector('.content');
    contentDiv.appendChild(showProject(proj));
}

export {
    renderProject
}
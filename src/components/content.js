import { showProject } from "./project-ui";
import { showTodo } from "./todo-ui";



function renderProject(proj) {
    
    const contentDiv = document.querySelector('.content');
    contentDiv.addEventListener('click',(event)=>{
      const target = event.target;
      switch (target.name) {
          case 'edit':
              console.log('Edit Todo');
              break;
          case 'details':
              console.log('Show todo details');
              
              break;
          case 'delete':
              console.log('Delete todo');
              
              break;
          case 'new-todo':
      
          console.log('Create new todo');
              break;
          case 'isComplete':
            
          console.log('Change complete status');
              break;
      
          default:
              break;
      }
    })


  

    while (contentDiv.firstElementChild !== null) {
      contentDiv.removeChild(contentDiv.firstElementChild);
    }
    
    contentDiv.appendChild(showProject(proj));
    contentDiv.appendChild(showTodo(proj));
    
}




export {
    renderProject
}
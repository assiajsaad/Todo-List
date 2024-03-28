import './style.css';
import { Data } from './data';
import { renderProject } from './components/content';
import { showSidebar } from './components/sidebar-list';

const data = new Data();
let obj = data.getProjectByIndex(0);

showSidebar(data.getData());


renderProject(obj);

document.body.addEventListener('click',(event)=>{
    const target = event.target;
    switch (target.classList[1]) {
        case 'project-title':
            obj = data.getProjectByIndex(target.classList[0]);
            renderProject(obj);
            
            break;
    
        default:
            break;
    }
})

document.body.addEventListener('click',(event)=>{
    const target = event.target;
    switch (target.name) {
        case 'edit':
            console.log(`Edit Todo ${target.classList[0]}`);
            break;
        case 'details':
            console.log(`Show todo details ${target.classList[0]}`);
            
            break;
        case 'delete':
            obj.deleteTodo(target.classList[0]);
            renderProject(obj);
           obj.logProject();
            break;
        case 'new-todo':
    
        console.log(`Create new todo ${target.classList[0]}`);
            break;
        case 'isComplete':
          
        console.log(`Change complete status ${target.classList}`);
            break;
    
        default:
            break;
    }
  })
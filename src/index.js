import './style.css';
import { Data } from './data';
import { renderProject } from './components/content';
import { showSidebar } from './components/sidebar-list';

const data = new Data();
const obj = data.getProjectByIndex(0);

showSidebar(data.getData());


renderProject(obj);


document.body.addEventListener('click',(event)=>{
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
        case 'new-project':
    
        console.log('Create new project');
            break;
        case 'isComplete':
          
        console.log('Change complete status');
            break;
    
        default:
            break;
    }
})

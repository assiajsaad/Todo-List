import './style.css';
import { Data } from './data';
import { renderProject } from './components/content';
import { showSidebar } from './components/sidebar-list';

const data = new Data();
const obj = data.getProjectByIndex(0);

showSidebar(data.getData());
showSidebar(data.getData());
showSidebar(data.getData());
showSidebar(data.getData());
renderProject(obj);


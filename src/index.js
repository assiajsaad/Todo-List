import './style.css';
import { Data } from './data';
import { renderProject } from './components/content';

const data = new Data();


console.log("data[0]: " +data.getProjectByIndex(0));

renderProject();


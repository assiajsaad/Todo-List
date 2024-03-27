import './style.css';
import { Data } from './data';
import { renderProject } from './components/content';

const data = new Data();
const obj = data.getProjectByIndex(0);


renderProject(obj);


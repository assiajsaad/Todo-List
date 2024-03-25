import './style.css';
import { Data } from './data';
import { renderProject } from './components/content';

const data = new Data();
data.printData();
const object = data.getProjectByIndex(0);

object.logProject();

renderProject();


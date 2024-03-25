import './style.css';
import { Data } from './data';
import { renderProject } from './dom-manipulation/content';

const data = new Data();
data.printData();
const object = data.getProjectByIndex(0);

object.logProject();

renderProject();


import { Project } from "./models/project";
import { Todo } from "./models/todo";
import { logMessage } from "./models/logger";

function Data() {
  const data = [];

  function defaultData() {
    const defaultProj = new Project(
      "Default Project",
      "Default Description",
      "Nov 5"
    );
    const defaultTodo = new Todo(
      "Default Todo",
      "Default Task",
      "Sep 12",
      1,
      ""
    );

    defaultProj.addTodo(defaultTodo);

    data.push(defaultProj);
  }

  function printData() {
    logMessage(data);
  }

  function getData(){
    return [...data];
  }

  function addProject(project){
    data.push(project);
  }

  function writeToLocalStorage() {
    
  }
  function retrieveFromLocalStorage() {

  }

  function getProjectByIndex(index) {
    const proj = { ...data[index] };
    return proj;
}


  defaultData();

  return {
    printData,
    getData,
    addProject,
    getProjectByIndex
  };
}

export { Data };

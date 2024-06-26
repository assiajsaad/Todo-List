import { Project } from "./models/project";
import { Todo } from "./models/todo";
import { logMessage } from "./models/logger";
import _ from "lodash";

class Data {
  #data;
  constructor() {
    this.#data = [];
    this.defaultData();
  }

  defaultData() {
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
    const defaultTodo2 = new Todo(
      "Second default Todo",
      "Second default Task",
      "Nov 10",
      2,
      ""
    );

    const proj = new Project(
      "Project",
      "Description",
      "Sep 5"
    );
      defaultTodo2.setIsComplete= true;
      defaultProj.addTodo(defaultTodo2);
      defaultProj.addTodo(defaultTodo);
      defaultProj.addTodo(defaultTodo);

    this.#data.push(defaultProj);
    this.#data.push(proj);
  }

  printData() {
    logMessage(this.#data);
  }

  getData() {
    return [...this.#data];
  }

  addProject(project) {
    this.#data.push(project);
  }

  writeToLocalStorage() {}
  retrieveFromLocalStorage() {}

  getProjectByIndex(index) {
    const proj = this.#data[index];
    return proj;
  }
}

export { Data };

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

    defaultProj.addTodo(defaultTodo);

    this.#data.push(defaultProj);
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

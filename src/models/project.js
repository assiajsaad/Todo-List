import { logMessage } from "./logger";

class Project {
  #title;
  #description;
  #todoList = [];
  #deadline;

  constructor(title, description, deadline) {
    this.#title = title;
    this.#description = description;
    this.#deadline = deadline;
  }

  set setTitle(title) {
    this.#title = title;
  }

  get getTitle() {
    return this.#title;
  }

  set setDescription(description) {
    this.#description = description;
  }

  get getDescription() {
    return this.#description;
  }

  set setDeadline(deadline) {
    this.#deadline = deadline;
  }

  get getDeadline() {
    return this.#deadline;
  }

  get getTodos() {
    return this.#todoList;
  }

  addTodo(todo) {
    this.#todoList.push(todo);
  }

  logProject() {
    const todos = this.#todoList.map(todo => {
      return `\n\tTitle: ${todo.getTitle}, Description: ${todo.getDescription}, Duedate: ${todo.getDuedate}, Priority: ${todo.getPriority}, Completed: ${todo.getIsComplete}, Notes: ${todo.getNotes}`;
    }).join('');
    logMessage(
      `Title: ${this.#title}, Description: ${this.#description}, Deadline: ${this.#deadline}, Todos:${todos}`
    );
  }
}

export { Project };

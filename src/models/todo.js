import { logMessage } from "./logger";

class Todo {
  #title;
  #description;
  #duedate;
  #priority;
  #isComplete = false;
  #notes;
  #checklist = [];
  constructor(title, description, duedate, priority, notes) {
    this.#title = title;
    this.#description = description;
    this.#duedate = duedate;
    this.#priority = priority;
    this.#notes = notes;
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

  get getDesciption() {
    return this.#description;
  }

  set setDuedate(duedate) {
    this.#duedate = duedate;
  }

  get getDuedate() {
    return this.#duedate;
  }

  set setPriority(priority) {
    this.#priority = priority;
  }

  get getPriority() {
    return this.#priority;
  }

  set setIsComplete(isComplete) {
    this.#isComplete = isComplete;
  }

  get getIsComplete() {
    return this.#isComplete;
  }

  set setNotes(notes) {
    this.#notes = notes;
  }

  get getNotes() {
    return this.#notes;
  }

  addChecklist(checklist){ 
    this.#checklist.push(checklist);
  }
  get getCheckList(){
    return this.#checklist;
  }

  logTodo() {
    logMessage(
      `Title: ${this.#title}, Description: ${this.#description}, Duedate: ${
        this.#duedate
      }, Priority: ${this.#priority}, Completed: ${this.#isComplete}, Notes: ${
        this.#notes
      }`
    );
  }
}

export { Todo };

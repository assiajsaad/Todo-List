import { Project } from "./models/project";
import { Todo } from "./models/todo";

const defaultProj = new Project(
  "Default Project",
  "Default Description",
  "Nov 5"
);
const defaultTodo = new Todo("Default Todo", "Default Task", "Sep 12", 1, "");

defaultProj.addTodo(defaultTodo);

const data = [];

data.push(defaultProj);

export { data };

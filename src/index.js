import "./style.css";
import { Data } from "./data";
import { renderProject } from "./components/content";
import { showSidebar } from "./components/sidebar-list";
import { todoDetails } from "./components/todo-details";
import { todoEdit } from "./components/todo-edit";
import { dialogHandler } from "./components/dialog-handler";

const data = new Data();
let obj = data.getProjectByIndex(0);

showSidebar(data.getData());

renderProject(obj);

document.body.addEventListener("click", (event) => {
  const target = event.target;

  switch (target.classList[1]) {
    case "project-title":
      obj = data.getProjectByIndex(target.classList[0]);
      renderProject(obj);

      break;

    default:
      break;
  }

  switch (target.name) {
    case "edit":
      const todEdit = obj.getTodoByIndex(target.classList[0]);
      const todoEditDialog = todoEdit(todEdit);

      dialogHandler(todoEditDialog);
      break;
    case "details":
      const toDets = obj.getTodoByIndex(target.classList[0]);
      const todoDetailsDialog = todoDetails(toDets);

      dialogHandler(todoDetailsDialog);

      break;
    case "delete":
      obj.deleteTodo(target.classList[0]);
      renderProject(obj);
      obj.logProject();
      break;
    case "new-todo":
      console.log(`Create new todo ${target.classList[0]}`);
      break;
    case "isComplete":
      const todo = obj.getTodoByIndex(target.classList[0]);
      console.log(`stat: ${todo.getIsComplete}`);
      todo.setIsComplete = !todo.getIsComplete;
      obj.logProject();
      break;
    case "new-project":
      console.log(`New Project ${target.classList}`);
      break;
    case "close-dialog":
      document.body.removeChild(target.parentNode);
      break;

    default:
      break;
  }
});

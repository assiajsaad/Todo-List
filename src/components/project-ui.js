
function showProject(proj) {
  const project = document.createElement("div");
  const title = document.createElement("div");
  const description = document.createElement("div");
  const deadline = document.createElement("div");

  title.textContent = proj.getTitle;
  title.classList.add('project-title');
  description.textContent = proj.getDescription;
  description.classList.add('project-description');
  deadline.textContent = proj.getDeadline;
  deadline.classList.add('project-deadline');
  

  project.appendChild(title);
  project.appendChild(description);
  project.appendChild(deadline);
  project.classList.add('project-content');

  return project;
}

export { showProject };

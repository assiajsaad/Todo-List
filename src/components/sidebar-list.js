function showSidebar(data) {
  const titleDiv = document.querySelector(".project-list");
  const titleList = document.createElement("ul");
  const lastChild = titleDiv.lastElementChild;

  if (lastChild !== null) {
    titleDiv.removeChild(lastChild);
  }

  data.map((proj, index) => {
    const title = document.createElement("li");
    title.textContent = proj.getTitle;
    title.classList.add(index);
    titleList.appendChild(title);
  });

  titleDiv.appendChild(titleList);
}

export { showSidebar };

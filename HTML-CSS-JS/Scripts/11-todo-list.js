const todoList = ["make dinner", "wash dishes"];

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo} <button>Delete</button></p>`;
    todoListHTML += html;

    console.log(todoListHTML);

    document.querySelector(".js-todo-list").innerHTML = todoListHTML;
  }
}

function addTodo(params) {
  const inputElement = document.querySelector(".js-name-input");

  const name = inputElement.value;
  //   console.log(name);

  todoList.push(name);
  console.log(todoList);

  inputElement.value = "";

  renderTodoList();
}

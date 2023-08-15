const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';
  
  todoList.forEach((todoObject) => {
    const {name} = todoObject;
    const html = `
    <div class="todo-list">
      <input class="checkbox" type="checkbox">
      <div class="todo-content">
        <p>${name}</p>
        <button class="delete-button"></button>
      </div>
    </div>
    `;
    todoListHTML += html;
  });

  document.querySelector('.todo-list-container').innerHTML = todoListHTML;

  document.querySelectorAll('.delete-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodoList();
    });
  });
  localStorage.setItem('todoList', JSON.stringify(todoList));
};

document.querySelector('.todo')
  .addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      addTodo();
      console.log(todoList);
    };
  });

function addTodo() {
  const inputElement = document.querySelector('.todo');
  const name = inputElement.value
  
  todoList.push({name});
  
  inputElement.value = '';

  renderTodoList();

  localStorage.setItem('todoList', JSON.stringify(todoList));
};
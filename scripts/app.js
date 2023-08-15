/* 
TODO:

  - checking checkbox changes text color and adds cross line
  - implement 3 lists :
    - Completed = all todos with checked checkbox
    - Active = all todos without checked checkbox
    - All = Completed + Active
  - clicking on elements on the navbar displays proper list
  - Clear Completed removes all todos with checked checkbox
  - items left shows number of todos without checked checkbox
*/

const todoInput = document.querySelector('.todo');
const todoPlaceholder = document.querySelector('.todo-list-container');
const deleteButtons = document.querySelectorAll('.delete-button');
let html = '';

todoInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTodo()
  }
})

// adds todo to the list
function addTodo() {
  html = `
  <div class="todo-list">
    <input class="checkbox" type="checkbox">
    <div class="todo-content">
      <p>${todoInput.value}</p>
      <button onclick="
      removeTodo()
      " class="delete-button"></button>
    </div>
  </div>`

  todoPlaceholder.innerHTML += html;
  todoInput.value = '';
}
// removes todo from a list
function removeTodo() {
  let todo = document.querySelector('.todo-list');
  todo.remove();
}
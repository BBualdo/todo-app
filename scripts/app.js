/* 
TODO:

  - taking value from input and showing it in the list
  - working delete buttons which remove its parent from the list 
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
let html = '';

todoInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    html = `
    <div class="todo-list">
      <input class="checkbox" type="checkbox">
      <div class="todo-content">
        <p>${todoInput.value}</p>
        <button class="delete-button"></button>
      </div>
  </div>`

    todoPlaceholder.innerHTML += html;
    todoInput.value = '';
  }
})
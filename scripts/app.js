let todoList =  /* JSON.parse(localStorage.getItem('todoList')) || */[
  {
    name: 'Complete online JavaScript course',
    completed: false
  },
  {
    name: 'Jog around the park 3x',
    completed: false
  },
  {
    name: '10 minutes meditation',
    completed: false
  },
  {
    name: 'Read for 1 hour',
    completed: false
  },
  {
    name: 'Pick up groceries',
    completed: false
  },
  {
    name: 'Complete Todo App on Frontend Mentor',
    completed: false
  }
];

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
  
  markAsCompleted();

  localStorage.setItem('todoList', JSON.stringify(todoList));

  const itemsLeft = document.querySelector('.items-left');
  itemsLeft.innerHTML = `
  <p>${todoList.length} items left</p>
  `
};

document.querySelector('.todo')
  .addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      addTodo();
      console.log(todoList);
    };
  });
// Add Todo logic
function addTodo() {
  const inputElement = document.querySelector('.todo');
  const name = inputElement.value
  const complition = todoList.[todoList.length].completed // ?
  todoList.push({name, complition = false});
  
  inputElement.value = '';

  renderTodoList();

  localStorage.setItem('todoList', JSON.stringify(todoList));
};
// Mark as 'Completed' logic
function markAsCompleted() {
    todoList.forEach((todo, index) => { // ?
      const checkbox = todo.querySelector('.checkbox');
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          todo.classList.add('completed');
          todoList[index].completed = true; // ?
        } else {
          todo.classList.remove('completed');
          todoList[index].completed = false; // ?
        };
      });
    })
  };

  // Clear Completed logic
  const clearButton = document.querySelector('.clear-completed-button');
  clearButton.addEventListener('click', () => {
    document.querySelectorAll('.todo-list')
      .forEach((todo, index) => {
        if (todo.classList.contains('completed')) {
          todoList.splice(index, 1);
        };
      }) 
    renderTodoList();
  })
/**
 * 로컬 스토리지에서 할 일 목록을 불러오는 함수
 */
function loadTodoItems() {
    const todoItems = JSON.parse(localStorage.getItem('todoItems')) || [];
    todoItems.forEach(item => {
      const todoItem = createTodoItemElement(item.text, item.completed);
      document.getElementById('todo-list').appendChild(todoItem);
    });
  }
  
  /**
   * 새로운 할 일을 로컬 스토리지에 저장하는 함수
   * @param {string} todoText - 추가할 할 일 텍스트
   */
  function saveTodoItem(todoText) {
    const todoItems = JSON.parse(localStorage.getItem('todoItems')) || [];
    todoItems.push({ text: todoText, completed: false });
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
  }
  
  /**
   * 로컬 스토리지에서 할 일을 삭제하는 함수
   * @param {string} todoText - 삭제할 할 일 텍스트
   */
  function removeTodoItem(todoText) {
    let todoItems = JSON.parse(localStorage.getItem('todoItems')) || [];
    todoItems = todoItems.filter(item => item.text !== todoText);
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
  }
  
  /**
   * 할 일의 완료 상태를 업데이트하는 함수
   * @param {string} todoText - 완료 상태를 업데이트할 할 일 텍스트
   */
  function updateTodoItemStatus(todoText) {
    const todoItems = JSON.parse(localStorage.getItem('todoItems')) || [];
    const todoItem = todoItems.find(item => item.text === todoText);
    if (todoItem) {
      todoItem.completed = !todoItem.completed;
      localStorage.setItem('todoItems', JSON.stringify(todoItems));
    }
  }
  
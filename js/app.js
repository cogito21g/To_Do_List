// DOMContentLoaded 이벤트가 발생하면 초기화 함수 실행
document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');
  
    // 추가 버튼 클릭 시 할 일 추가 함수 실행
    addBtn.addEventListener('click', () => {
      const todoText = todoInput.value.trim();
      if (todoText !== '') {
        addTodoItem(todoText);
        todoInput.value = '';
      }
    });
  
    // 할 일 목록 클릭 시 완료 상태 토글 또는 삭제 기능 실행
    todoList.addEventListener('click', (event) => {
      if (event.target.classList.contains('delete-btn')) {
        deleteTodoItem(event.target.parentElement);
      } else if (event.target.classList.contains('todo-item')) {
        toggleCompleteTodoItem(event.target);
      }
    });
  
    // 로컬 스토리지에서 할 일 목록 불러오기
    loadTodoItems();
  });
  
  /**
   * 새로운 할 일을 추가하는 함수
   * @param {string} todoText - 추가할 할 일 텍스트
   */
  function addTodoItem(todoText) {
    const todoItem = createTodoItemElement(todoText);
    saveTodoItem(todoText);
    document.getElementById('todo-list').appendChild(todoItem);
  }
  
  /**
   * 할 일을 삭제하는 함수
   * @param {HTMLElement} todoItem - 삭제할 할 일 엘리먼트
   */
  function deleteTodoItem(todoItem) {
    removeTodoItem(todoItem.textContent.trim());
    todoItem.remove();
  }
  
  /**
   * 할 일의 완료 상태를 토글하는 함수
   * @param {HTMLElement} todoItem - 완료 상태를 토글할 할 일 엘리먼트
   */
  function toggleCompleteTodoItem(todoItem) {
    todoItem.classList.toggle('completed');
    updateTodoItemStatus(todoItem.textContent.trim());
  }
  
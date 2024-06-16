/**
 * 할 일 항목 엘리먼트를 생성하는 함수
 * @param {string} todoText - 할 일 텍스트
 * @param {boolean} [completed=false] - 완료 상태 여부
 * @returns {HTMLElement} - 할 일 항목 엘리먼트
 */
function createTodoItemElement(todoText, completed = false) {
    const todoItem = document.createElement('li');
    todoItem.textContent = todoText;
    todoItem.classList.add('todo-item');
    if (completed) {
      todoItem.classList.add('completed');
    }
  
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    todoItem.appendChild(deleteBtn);
  
    return todoItem;
  }
  
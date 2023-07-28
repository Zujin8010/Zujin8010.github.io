window.addEventListener('load', function () {
    renderTodos();
});

function getTodosFromLocalStorage() {
    const todosJSON = localStorage.getItem('todos');
    return todosJSON ? JSON.parse(todosJSON) : [];
}

function setTodosToLocaStorage(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function addTodo() {
    const todoText = document.getElementById('todoInput').value.trim();
    if (todoText !== '') {
        const todos = getTodosFromLocalStorage();
        todos.push({ todoItem: todoText, todoCheck: false });
        setTodosToLocaStorage(todos);
        renderTodos();
        clearInput();
    }
}

function clearInput() {
    document.getElementById('todoInput').value = '';
}

function deleteTodo(index) {
    const todos = getTodosFromLocalStorage();
    todos.splice(index, 1);
    setTodosToLocaStorage(todos);
    renderTodos(); 
}
let isChecked
function renderTodos() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';

    const todos = getTodosFromLocalStorage();
    todos.forEach((todo, index)=> {
        
        if (todo.todoCheck) {
            isChecked = 'checked'
        } else { 
            isChecked = '' 
        }


        const div = document.createElement('div');
        div.innerHTML =
            `
        <div class="input-group">
            <input class="form-check-input mt-0" type="checkbox" onchange="changeBoxFN(${index})"${isChecked}>  
            <input type="text" class="form-control" value="${todo.todoItem}" aria-label="Recipient's username with two button addons">
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" onclick="saveTodoText(${index})">儲存</button>
                <button class="btn btn-outline-secondary" type="button" onclick="deleteTodo(${index})">刪除</button>
            </div>
        </div>
        `;
        todoList.appendChild(div);
    });
}

function changeBoxFN(index) {
    const todos = getTodosFromLocalStorage();
    todos[index].todoCheck = !todos[index].todoCheck; 
    // 將值相反
    setTodosToLocaStorage(todos);
    

    
}






function saveTodoText(index) {
    const todoInput = document.querySelectorAll('.form-control')[index];
    const todoText = todoInput.value;
    const todos = getTodosFromLocalStorage();
    todos[index].todoItem = todoText; // 更新代辦事項的文字內容
    setTodosToLocaStorage(todos);
}

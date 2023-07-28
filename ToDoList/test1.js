

window.addEventListener('load', function () {
    getTodosFromLocalStorage()
    renderTodos()
})

function getTodosFromLocalStorage() {
    const todosJSON = localStorage.getItem('todos')
    return todosJSON ? JSON.parse(todosJSON) : []
}

function setTodosToLocaStorage(todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

function addTodo() {
    const todoText = document.getElementById('todoInput').value.trim()

    if (todoText !== '') {
        const todos = getTodosFromLocalStorage()
        todos.push(todoText)
        setTodosToLocaStorage(todos)
        renderTodos()
        clearInput()
    }
}

function clearInput() {
    document.getElementById('todoInput').value = ''
}
function deleteTodo(index) {
    const todos = getTodosFromLocalStorage();
    todos.splice(index, 1)
}
function renderTodos() {
    const todoList = document.getElementById('todoList')
    todoList.innerHTML = ''

    const todos = getTodosFromLocalStorage();
    todos.forEach((todo, index) => {
        const li = document.createElement('li')
        li.innerHTML =
            `
        <div class="input-group">
            <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input">  
            <input type="text" class="form-control" value="${todo}" aria-label="Recipient's username with two button addons">
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" onclick="saveTodoText(${index})">儲存</button>
                <button class="btn btn-outline-secondary" type="button" onclick="deleteTodo(${index})">刪除</button>
            </div>
            </div>
        `
        todoList.appendChild(li)
    })
}

function saveTodoText(index){
    const todoInput = document.querySelectorAll('.form-control')[index];
    const todoText = todoInput.value
    const todos = getTodosFromLocalStorage()
    todos[index] = todoText
    setTodosToLocaStorage(todos)
}

renderTodos()
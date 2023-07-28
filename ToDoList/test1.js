let todos

window.addEventListener('load', function () {
    setTodosToLocaStorage()
    getTodosFromLocalStorage()
    renderTodos()
})

function getTodosFromLocalStorage() {
    const todosJSON = localStorage.getItem('todos')
    return todosJSON ? JSON.parse(todosJSON) : []
}

function setTodosToLocaStorage() {
    localStorage.setItem('todos', JSON.stringify(todos))
}

function addTodo() {
    const todoText = document.getElementById('todoInput').value.trim()
    console.log(todoText)
    // let obj = {
        // todos: todoText,
        // todoCheck: false

    // }
    // console.log(obj)
    if (todoText !== '') {
        const todos = getTodosFromLocalStorage()
        todos.push({ todoItem: todos, todoCheck: false })
        console.log(todos)
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

    const todos = getTodosFromLocalStorage()
    todos.forEach((todo, index, isChecked) => {


        const div = document.createElement('div')
        div.innerHTML =
            `
        <div class="input-group mb-3">
        <div class="input-group-text">  
        <input class="form-check-input mt-0" type="checkbox" aria-label="Checkbox for following text input" onchange="isCheckedFN(${index})" ${isChecked}
        >  
        
        
        
            <input type="text" class="form-control" value="${todo}" aria-label="Recipient's username with two button addons">
            
            <div class="input-group-append">


                <button class="btn btn-outline-secondary" type="button" onclick="saveTodoText(${index})">儲存</button>
                <button class="btn btn-outline-secondary" type="button" onclick="deleteTodo(${index})">刪除</button>
            </div>
            </div>
        `
        todoList.appendChild(div)
    })
}
function isCheckedFN(index){
    let todos=JSON.parse(localStorage.getItem(todos))
    console.log(todos)
    if(todos[index].todoCheck){
        todos[index].todoCheck=false;
    }else{
        todos[idx].todoCheck =true;
    }
    localStorage.setItem(todos,JSON.stringify(todoList))
    rendering();

}
function saveTodoText(index) {
    const todoInput = document.querySelectorAll('.form-control')[index];
    const todoText = todoInput.value
    const todos = getTodosFromLocalStorage()
    todos[index] = todoText
    setTodosToLocaStorage(todos)
}

renderTodos()
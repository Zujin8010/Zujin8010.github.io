const localStorageKey = 'todoListKey'
let todoList = JSON.parse(localStorage.getItem(localStorageKey))
if (todoList == null) { todoList = [] }
let isChecked

const show = document.getElementById('show-todo-list')
const todoInput = document.getElementById('todo-input')

document.getElementById('add-btn').addEventListener('click', () => {
    const inputValue = todoInput.value.trim()
    if (inputValue !== '') {
        todoList.push({ todoItem: inputValue, todoCheck: false })
        localStorage.setItem(localStorageKey, JSON.stringify(todoList))
        todoInput.value = ''
        rendering()
    }
})
window.addEventListener('load', function () {
    rendering()
})

function rendering() {
    show.innerHTML = ''
    todoList.forEach((item, idx) => {
        if (item.todoCheck) {
            isChecked = 'checked'
        } else {
            isChecked = ''
        }
        const div = document.createElement('div')
        div.innerHTML = `
            <div class="input-group mb-3">
                <div class="input-group-text">
                    <input class="form-check-input mt-0" type="checkbox"
                    onchange="isCheckedFN(${idx})"${isChecked}>
                </div>
                    <input disabled type="text"
                    class="form-control" value="${item.todoItem}">
                    <button onclick="todoItemEditFN(${idx})"
                    class="btn btn-warning">EDIT</button>
                    <button onclick="todoItemDeleteFN(${idx})"
                    class="btn btn-danger">DELETE</button>
                </div>`
        show.append(div)

    })
}

function isCheckedFN(idx) {
    if (todoList[idx].todoCheck) {
        todoList[idx].todoCheck = false;
    } else {
        todoList[idx].todoCheck = true;
    }
    localStorage.setItem(localStorageKey, JSON.stringify(todoList))
    rendering()
}
function todoItemDeleteFN(idx) {
    todoList.splice(idx, 1)

    localStorage.setItem(localStorageKey, JSON.stringify(todoList))
    rendering()
}
function todoItemEditFN(idx) {
    const newDiv = document.createElement('div')
    const todoItem = todoList[idx]

    newDiv.innerHTML = `
    <div class="input-group mb-3">
        <div class="input-group-text">
            <input class="form-check-input mt-0" type="checkbox"
            onchange="isCheckedFN(${idx})" ${isChecked}>
        </div>
        <input type="text" class="form-control" value="${todoItem.todoItem}" id="editInput">
        <button onclick="todoItemEditSaveFN(${idx})" class="btn btn-success">SAVE</button>
        <button onclick="todoItemDeleteFN(${idx})" class="btn btn-danger">DELETE</button>
    </div>`
    show.replaceChild(newDiv, show.childNodes[idx])
}

function todoItemEditSaveFN(idx) {
    const editInput = document.getElementById("editInput")
    const newInputValue = editInput.value.trim()
    if (newInputValue !== '') {
        todoList[idx].todoItem = newInputValue
        localStorage.setItem(localStorageKey, JSON.stringify(todoList))
        newInputValue.disabled = true;
        rendering()
    }
}
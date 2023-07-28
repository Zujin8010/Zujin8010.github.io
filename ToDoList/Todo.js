const todoList = document.querySelector('.todoList')
const localStorageKey = "localStorageKey"
const listText = document.querySelector('.listText')
const editBtn = document.querySelector('#edit')
const deleteBtn = document.querySelector('#delete')
const addBtn = document.querySelector('.addBtn')
const todobody = document.querySelector('.todo-tbody')
const toDoInput = document.querySelector('.toDoInput')


getLocalStorage()
window.onload = function () {
    let storageArray =[]
    renderFn()
}

function renderFn(){

}


document.querySelector('addBtn').addEventListener('click',()=>{
    const inputValue = input.value.trim()
    if(inputValue !==''){
        toDoInput.push({})
        setLocalStorage()
        toDoInput.value=''
        renderFn()
    }
    window.addEventListener('load',function(){
        
    })

})

function addFn(){
    setLocalStorage()
}
function editFn(){

}

function saveFn(){
    setLocalStorage()
}

function deleteFn(){

}
function getLocalStorage(key){
    return JSON.parse(localStorage.getItem(key))

    return data
}

function setLocalStorage(key,value){
    localStorage.setItem(key,JSON.stringify(value))
}
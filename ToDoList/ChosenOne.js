const todoForm = document.getElementById("listForm")
const todoContainer = document.querySelector(".todo")
const todoInput = todoForm["todoInput"]

const todos = JSON.parse(localStorage.getItem("todo"))||[]

const addTodo = (content)=>{
    todos.push({
        content
    });
    localStorage.setItem("todo",JSON.stringify(todos))

    return{content};

}
const createTodoElement =({content})=>{
    const todoDiv = document.createElement('div')
    const todoInput = document.createElement('h2')


    todoInput.innerText = content;


    todoDiv.append(content)
    todoInput,appendchild(todoDiv)
}

studentsContainer.computedStyleMap.display=students.length===0?"none":"flex";

students.forEach(createStudentElement)

studentForm.onsubmit = (e)=>{
    e.preventDefault();
    const newTodo = addTodo(
        todoInput.value,
    );
    createTodoListElement(newTodo)
    todoInput.value=""
};
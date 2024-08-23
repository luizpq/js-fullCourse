const todoList = []
const button = document.getElementById('button')
renderTodoList()

function renderTodoList() {
    let todoListHTML = ''

    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i]
        const html = `
        <p>
        ${todo} 
        <button onclick="
        
        todoList.splice(${i}, 1)
        renderTodoList()

        ">Delete</button>
        </p>`
        todoListHTML += html


    }

    console.log(todoListHTML)

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML
        
}

const addTodo = () => {
    const nameInput = document.querySelector('.js-name-input')
    const name = nameInput.value
    
    todoList.push(name)
    console.log(todoList)

    nameInput.value = ''

    renderTodoList()
}


function removeTodo() {
 
}


const deleteButton = document.querySelector('.js-delete-button')



button.addEventListener('click', () => {
    addTodo()
})
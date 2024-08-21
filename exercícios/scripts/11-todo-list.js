const todoList = []
const button = document.getElementById('button')




const addTodo = () => {
    const nameInput = document.querySelector('.js-name-input')
    const name = nameInput.value
    
    todoList.push(name)
    console.log(todoList)
}


button.addEventListener('click', () => {
    addTodo()
})
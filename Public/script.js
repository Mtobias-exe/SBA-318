const inputTodo = document.getElementById('input')
const submitTodo = document.getElementById('submit-todo')

const URL = "http://localhost:3000/api/todo"

submitTodo.addEventListener('click', getInfo)

async function getInfo(e) {
    e.preventDefault();
    const res = await fetch(URL, { method: 'GET' });
    console.log(res)
    const data = await res.json()
    inputTodo.value = data.task
   
}


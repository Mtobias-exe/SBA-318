const inputTodo = document.getElementById('input')
const submitTodo = document.getElementById('submit-todo')

const URL = "http://localhost:3000/api/todo"


// submitTodo.addEventListener('click', getInfo)

// async function getInfo(e) {
//     e.preventDefault();
//     const res = await fetch(URL, { method: 'GET' });
//     console.log(res)
//     const data = await res.json()
//     inputTodo.value = data.task
   
// }

submitTodo.addEventListener('click', submitTask)

async function start(){
    const res = await fetch(URL);
    const data = await res.json();
   
}


async function submitTask(event){
    event.preventDefault();
    const toDo = inputTodo.value 

    if (toDo){
        const res = await fetch(URL, {method: 'POST'});
        const newtask = await res.json();
        console.log(newtask);
        start()
    }
    
}


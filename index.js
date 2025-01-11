const express = require('express');
const app = express();
const port = 3000

const todos = require('./data/todo')
const users = require('./data/users')

const userRoutes = require('./routes/userRoutes')
const path = require('path');

//middleware for get post
const bodyParser = require('body-parser')

app.use('/api/users', userRoutes)
// app.use('/api/users', postRoutes)
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({extended: true}))
app.use(express.static(__dirname + '/Public'));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname + '/views/index.html'))
})

//get all users
app.get('/api/users', (req,res)=>{
    res.json(users)
})

app.post('/api/users', (req, res)=>{
    if(req.body.name && req.body.username && req.body.email){
        if(users.find((u)=> u.username == req.body.username)){
            res.json({error: 'Username Already Taken'})
            return
        }

        const user = {
            id: users[users.length -1].id + 1,
            name: req.body.name,
            username: req.body.username,
            email: req.body.email
        };
    
        users.push(user)
        res.json(users[users.length -1])
    } else res.json({error: 'Insufficient Data'})
});


//get all todos



app.get('/api/todo', (req, res)=>{
    res.json(todos);
} )

app.get('/api/todo/:id', (req,res,next)=>{
    const todoList = todos.find((todo)=> todo.id == req.params.id);
    res.json(todoList);
    
})



app.post('/api/todo', (req, res)=>{

    let tasks = [];
    const newId = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const newTodo = {
        id: newId,
        task: req.body.task,
        completed: false
    }

    todos.push(newTodo)
    res.json(todos);
})

app.put('/api/todo/:id', (req, res)=>{
    let todo = todos.find(todo => todo.id == req.params.id)
    if (todo){
        todo.task = req.body.task
        todo.completed = req.body.completed
        res.json([])
    } else{
        res.send('Given id does not exist')
    }
    res.json([]);
})

app.delete('/api/todo/:id', (req, res)=>{
    let index = todos.findIndex((todo)=> todo.id == req.params.id);
    todos.splice(index, 1);
    res.json(todos);
})

app.listen(port, ()=>{
    console.log(`server listening on: ${port}`)
})
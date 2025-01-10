const express = require('express');
const app = express();
const port = 3000

const todos = require('./data/todo')
const users = require('./data/users')

const userRoutes = require('./routes/userRoutes')

//middleware for get post
const bodyParser = require('body-parser')

app.use('/api/users', userRoutes)
// app.use('/api/users', postRoutes)
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({extended: true}))

app.get('/', (req, res)=>{
    res.send('Todo List Home Page')
})

//get all users
app.get('/api/users', (req,res)=>{
    res.json(users)
})

//get all todos
app.get('/api/todo', (req, res)=>{
    res.json(todos);
} )

app.get('/api/todo/:id', (req,res,next)=>{
    const todoList = todos.find((todo)=> todo.id == req.params.id);
    res.json(todoList);
    
})

app.post('/api/todo', (req, res)=>{
    let body = req.params.body
    console.log(body);
    todos.push()
    res.json([]);
})

app.put('/api/todo/:id', (req, res)=>{
    res.json([]);
})

app.delete('/api/todo/:id', (req, res)=>{
    res.json([]);
})

app.listen(port, ()=>{
    console.log(`server listening on: ${port}`)
})
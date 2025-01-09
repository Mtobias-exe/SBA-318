const express = require('express');
const app = express();
const port = 3000

const todo = require('./data/todo')


app.get('/', (req, res)=>{
    res.send('Todo List Home Page')
})

app.listen(port, ()=>{
    console.log(`server listening on: ${port}`)
})
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url}`);
  next();
});

let todos = [];

app.get('/', (_, res) => {
  return res.status(200).json(todos);
});

app.post('/', (req, res) => {
  const todo = req.body;
  todos.push(todo);
  return res.status(200).json(todos);
});

app.delete('/:todoId', (req, res) => {
  const todoId = req.params.todoId;
  console.log({ todoId });
  todos = todos.filter((todo) => todo.id !== todoId);
  return res.status(200).json(todos);
});

app.put('/:todoId', (req, res) => {
  const todoId = req.params.todoId;
  const updatedTodo = req.body;

  const index = todos.findIndex((todo) => todo.id === todoId);
  if (index !== -1) {
    todos[index] = { ...todos[index], ...updatedTodo };
    return res.status(200).json(todos);
  } else {
    return res.status(404).json({ message: "Todo not found" });
  }
});

app.listen(PORT, () => console.log('Server running on port', PORT));
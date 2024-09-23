import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const getTodos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTodo = async (todo) => {
  const response = await axios.post(API_URL, todo);
  return response.data;
};

export const deleteTodo = async (todoId) => {
  const response = await axios.delete(`${API_URL}/${todoId}`);
  return response.data;
};

export const editTodo = async (todo) => {
  const response = await axios.put(`${API_URL}/${todo.id}`, todo);
  return response.data;
};
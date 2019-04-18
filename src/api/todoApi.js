import axios from "axios";

const API = "https://todos-api-learn.herokuapp.com/todos";

const createTodo = todo => {
  return axios.post(API, todo);
};

const getTodo = () => {
  return axios.get(API);
};

const updateTodo = todo => {
  return axios.put(`${API}/${todo.id}`, todo);
};

const removeTodo = todo => {
  return axios.delete(`${API}/${todo.id}`);
};

const TodoApi = { createTodo, getTodo, updateTodo, removeTodo };

export { TodoApi };

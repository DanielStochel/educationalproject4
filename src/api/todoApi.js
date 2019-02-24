import { HttpClient } from "./httpClient";

const API = "https://todos-api-learn.herokuapp.com/todos";

const createTodo = todo => {
  return HttpClient.post(API, todo);
};

const getTodo = () => {
  return HttpClient.get(API);
};

const updateTodo = todo => {
  return HttpClient.put(`${API}/${todo.id}`, todo);
};

const removeTodo = todo => {
  return HttpClient.delete(`${API}/${todo.id}`);
};

const TodoApi = { createTodo, getTodo, updateTodo, removeTodo };

export { TodoApi };

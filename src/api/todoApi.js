import {HttpClient} from './httpClient'

// This is the API. The backend root URL can be set from here.

const API = 'https://todos-api-learn.herokuapp.com/todos'

//Setting the todos URI

// The CRUD Operations of the Todo Resource.


//Create
const createTodo = todo => {
  return HttpClient.post(API, todo)
}

//Read
const getTodo = () => {
  return HttpClient.get(API)
}

//Update
const updateTodo = todo => {
  return HttpClient.post(`${API}/${todo.id}`, todo)
}

//Delete
const removeTodo = todo => {
  return HttpClient.delete(`${API}/${todo.id}`)
}


//Encapsulating in a JSON object

const TodoApi = {createTodo, getTodo, updateTodo, removeTodo}

export {TodoApi}

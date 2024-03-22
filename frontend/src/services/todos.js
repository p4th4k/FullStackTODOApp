import axios from "axios"
const baseUrl = "http://localhost:3000/api";

const getTodos = () => {
  const todos = axios.get(`${baseUrl}/getTodos`);
  return todos.then(todo => todo.data)
};

const addTodo = (title) => {
  const newTodo = axios.post(`${baseUrl}/addTodo`, {title: title})
  return newTodo.then(newT => newT.data)
}

const updateTodo = (id, newTodoStatus) => {
  const updatedTodo = axios.patch(`${baseUrl}/changeTodo/${id}`,{status: newTodoStatus})
  return updatedTodo.then(updateTodo => updateTodo.data)
}

const deleteTodo = (id) => {
  const deleted = axios.delete(`${baseUrl}/deleteTodo/${id}`)
  return deleted.then(del => del.data)
}

export { getTodos, deleteTodo , updateTodo, addTodo};

import axios from "axios"
const baseUrl = "http://localhost:3000/api";

const getTodos = () => {
  const todos = axios.get(`${baseUrl}/getTodos`);
  return todos.then(todo => todo.data)
};

const deleteTodo = (id) => {
  const deleted = axios.delete(`${baseUrl}/deleteTodo/${id}`)
  return deleted
}

export { getTodos, deleteTodo };

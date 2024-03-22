import "./stylesheets/App.css";
import Input from "./components/Input";
import Board from "./components/Board";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Background from "./components/Background";
import { getTodos, deleteTodo, updateTodo, addTodo } from "./services/todos";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [items, setItems] = useState([]);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    (async () => {
      setItems(await getTodos());
    })();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault()

    let addedTodo = await addTodo(todo)
    let newList = [...items]
    newList.push(addedTodo);

    setItems(newList)
    setTodo("")
  }

  const handleClear = async () => {
    let newList = [...items];

    for (let i = 0; i < newList.length; i++) {
      if (newList[i].status === "complete") {
        await deleteTodo(newList[i].id);
        newList.splice(i, 1);
      }
    }

    setItems(newList);
  };

  const handleTodoDelete = async (id) => {
    let newList = [...items];

    for (let i = 0; i < newList.length; i++) {
      if (newList[i].id === id) {
        await deleteTodo(id);
        newList.splice(i, 1);
      }
    }

    setItems(newList);
  };

  const handleTodoClick = (e) => {
    let title;
    if (e.target.classList.length > 2)
      title = e.target.parentElement.parentElement.childNodes[1].innerText;
    else title = e.target.parentElement.childNodes[1].innerText;

    let newList = items.map((item) => {
      if (item.title === title) {
        if (item.status === "active") {
          item.status = "complete";
          updateTodo(item.id, "complete")
          return item;
        }
        if (item.status === "complete") {
          item.status = "active";
          updateTodo(item.id, "active")
          return item;
        }
      }
      return item;
    });

    setItems(newList);
  };

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleTodo = (e) => {
    setTodo(e.target.value);
  };

  return (
    <>
      <Background />
      <main className="flex flex-col">
        <Header theme={theme} handleClick={handleTheme} />
        <Input todo={todo} handleChange={handleTodo} handleSubmit={handleSubmit} />
        <Board  items={items} setItems={setItems} handleClear={handleClear} handleTodoClick={handleTodoClick} handleTodoDelete={handleTodoDelete} />
        <Footer />
      </main>
    </>
  );
};

export default App;

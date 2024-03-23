import "./stylesheets/App.css";
import Input from "./components/Input";
import Board from "./components/Board";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Background from "./components/Background";
import { getTodos, deleteTodo, updateTodo, addTodo } from "./services/todos";

const sampleData = [
  {
    id: "1",
    title: "Complete online JavaScript course",
    status: "complete",
  },
  {
    id: "2",
    title: "Jog around the park 3x",
    status: "active",
  },
  {
    id: "3",
    title: "10 minutes meditation",
    status: "active",
  },
  {
    id: "4",
    title: "Read for 1 hour",
    status: "active",
  },
  {
    id: "5",
    title: "Pick up groceries",
    status: "active",
  },
  {
    id: "6",
    title: "Complete Todo App on Frontend Mentor",
    status: "active",
  },
];

const App = ({ mode }) => {
  const [theme, setTheme] = useState("dark");
  const [items, setItems] = useState([]);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    (async () => {
      setItems(mode === "PROD" ? await getTodos() : sampleData);
    })();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let addedTodo = mode === "PROD" ? await addTodo(todo) : {
      id: (Number(items[items.length-1].id) + 1).toString(),
      title: todo,
      status: "active"
    };
    let newList = [...items];
    newList.push(addedTodo);

    setItems(newList);
    setTodo("");
  };

  const handleClear = async () => {
    let newList = [...items];

    for (let i = 0; i < newList.length; i++) {
      if (newList[i].status === "complete") {
        mode === "PROD" ? await deleteTodo(newList[i].id) : newList.splice(i,1);
        mode === "PROD" ? newList.splice(i, 1) : "";
      }
    }

    setItems(newList);
  };

  const handleTodoDelete = async (id) => {
    let newList = [...items];

    for (let i = 0; i < newList.length; i++) {
      if (newList[i].id === id) {
        mode === "PROD" ? await deleteTodo(id) : newList.splice(i,1);
        mode === "PROD" ? newList.splice(i, 1) : "";
      }
    }

    setItems(newList);
  };

  const handleTodoClick = (e) => {
    let title;
    if (e.target.classList.length > 3)
      title = e.target.parentElement.parentElement.childNodes[1].innerText;
    else title = e.target.parentElement.childNodes[1].innerText;

    let newList = items.map((item) => {
      if (item.title === title) {
        if (item.status === "active") {
          item.status = "complete";
          mode === "PROD" ? updateTodo(item.id, "complete"): "";
          return item;
        }
        if (item.status === "complete") {
          item.status = "active";
          mode === "PROD" ? updateTodo(item.id, "active") : "";
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
      <main className={theme === "dark" ? "dark" : "light"}>
        <Background theme={theme} />
        <section className="mainSection flex flex-col">
          <Header theme={theme} handleClick={handleTheme} />
          <Input
            todo={todo}
            handleChange={handleTodo}
            handleSubmit={handleSubmit}
            theme={theme}
          />
          <Board
            items={items}
            theme={theme}
            setItems={setItems}
            handleClear={handleClear}
            handleTodoClick={handleTodoClick}
            handleTodoDelete={handleTodoDelete}
          />
          <Footer />
        </section>
      </main>
    </>
  );
};

export default App;

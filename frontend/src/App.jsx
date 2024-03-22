import { useState } from "react";
import "./stylesheets/App.css";
import Input from "./components/Input";
import Board from "./components/Board";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Background from "./components/Background";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [todo, setTodo] = useState("");

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
        <Input todo={todo} handleChange={handleTodo} />
        <Board/>
        <Footer/>
      </main>
    </>
  );
};

export default App;

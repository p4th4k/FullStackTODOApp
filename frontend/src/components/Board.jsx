import { useEffect, useState } from "react";
import "../stylesheets/Board.css";
import { Reorder } from "framer-motion";
import { getTodos, deleteTodo } from "../services/todos";

const Board = () => {
  let listItems = [];

  useEffect(() => {
    (async () => {
      setItems(await getTodos());
    })();
  }, []);

  const [items, setItems] = useState(listItems);
  const [currentTab, setCurrentTab] = useState("all");

  const handleTabChange = (e) => {
    let tabClicked = e.target.innerText.toLocaleLowerCase();
    setCurrentTab(tabClicked);
  };

  const handleClear = () => {};

  return (
    <>
      <section className="board">
        <div className="tasks">
          <Reorder.Group
            axis="y"
            values={items}
            onReorder={setItems}
            style={{ listStyleType: "none" }}
          >
            {items.map((item) => {
              if (
                currentTab === "all" ||
                (currentTab === "active" && item.status === "active") ||
                (currentTab === "completed" && item.status === "complete")
              ) {
                return (
                  <Reorder.Item
                    key={item.id}
                    value={item}
                    className="task-card flex"
                  >
                    <div className="task-circle"></div>
                    <p className="task-content josefin-regular">{item.title}</p>
                  </Reorder.Item>
                );
              }
            })}
          </Reorder.Group>
        </div>
        <div className="navigation flex josefin-bold">
          <p className="items-left">{items.length} items left</p>
          <div className="tabs flex">
            <p
              onClick={handleTabChange}
              className={currentTab === "all" ? "active" : ""}
            >
              All
            </p>
            <p
              onClick={handleTabChange}
              className={currentTab === "active" ? "active" : ""}
            >
              Active
            </p>
            <p
              onClick={handleTabChange}
              className={currentTab === "completed" ? "active" : ""}
            >
              Completed
            </p>
          </div>
          <p className="clear" onClick={handleClear}>
            Clear Completed
          </p>
        </div>
      </section>
    </>
  );
};

export default Board;

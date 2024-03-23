import { useState } from "react";
import "../stylesheets/Board.css";
import { Reorder } from "framer-motion";

const Board = ({
  items,
  handleClear,
  handleTodoClick,
  handleTodoDelete,
  setItems,
  theme,
}) => {
  const [currentTab, setCurrentTab] = useState("all");

  const handleTabChange = (e) => {
    let tabClicked = e.target.innerText.toLocaleLowerCase();
    setCurrentTab(tabClicked);
  };

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
                    className={
                      theme === "dark"
                        ? "task-card flex task-card-dark"
                        : "task-card task-card-light flex"
                    }
                  >
                    <div
                      className={
                        item.status === "complete"
                          ? "task-circle task-circle-fill"
                          : "task-circle"
                      }
                      onClick={handleTodoClick}
                    >
                      <div
                        className={
                          item.status === "complete"
                            ? "task-tick show task-tick-adjust"
                            : "task-tick"
                        }
                      ></div>
                    </div>
                    <p
                      className={
                        item.status === "complete"
                          ? theme === "dark"
                            ? "task-content task-content-dark task-content-complete"
                            : "task-content task-content-light task-content-complete"
                          : theme === "dark"
                          ? "task-content task-content-dark"
                          : "task-content task-content-light"
                      }
                      onClick={handleTodoClick}
                    >
                      {item.title}
                    </p>
                    <div
                      className="task-cross"
                      onClick={() => handleTodoDelete(item.id)}
                    ></div>
                  </Reorder.Item>
                );
              }
            })}
          </Reorder.Group>
        </div>
        <div
          className={
            theme === "dark"
              ? "navigation nav-dark flex josefin-bold task-card-dark"
              : "navigation nav-light flex josefin-bold task-card-light"
          }
        >
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

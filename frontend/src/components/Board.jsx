import { useEffect, useState } from "react";
import "../stylesheets/Board.css";
import { Reorder } from "framer-motion";
import { getTodos, deleteTodo } from "../services/todos";

const Board = () => {
  let listItems = [];

  const [items, setItems] = useState(listItems);
  const [currentTab, setCurrentTab] = useState("all");
  
  useEffect(() => {
    (async () => {
      setItems(await getTodos());
    })();
  }, []);
  
  const handleTabChange = (e) => {
    let tabClicked = e.target.innerText.toLocaleLowerCase();
    setCurrentTab(tabClicked);
  };

  const handleClear = async () => {
    let newList = [...items]

    for(let i = 0; i < newList.length; i++){
      if(newList[i].status === "complete"){
        await deleteTodo(newList[i].id)
        newList.splice(i, 1)
      }
    }

    setItems(newList)
  };

  const handleTodoClick = (e) => {
    let title;
    if(e.target.classList.length > 2) title = e.target.parentElement.parentElement.childNodes[1].innerText
    else title = e.target.parentElement.childNodes[1].innerText;
    
    let newList = items.map((item) => {
      if(item.title === title){
        if(item.status === "active"){
          item.status = "complete"
          return item
        }
        if(item.status === "complete"){
          item.status = "active"
          return item
        }
      }
      return item
    })

    setItems(newList)
  }

  const handleTodoDelete = async (id) => {
    let newList = [...items]
    
    for(let i = 0; i < newList.length; i++){
      if(newList[i].id === id){
        await deleteTodo(id)
        newList.splice(i, 1)
      }
    }

    setItems(newList)
  }

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
                    <div className={item.status === "complete" ? "task-circle task-circle-fill" : "task-circle"} onClick={handleTodoClick}>
                      <div className={item.status === "complete" ? "task-tick show task-tick-adjust" : "task-tick"}></div>
                    </div>
                    <p className={item.status === "complete" ? "task-content task-content-complete" : "task-content"} onClick={handleTodoClick}>{item.title}</p>
                    <div className="task-cross" onClick={() => handleTodoDelete(item.id)}></div>
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

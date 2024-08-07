import { useState, useEffect, useRef } from "react";
import KanbanBoardLists from "./KanbanBoardLists";
import styles from "./kanbanBoard.module.css";

const KanbanBoard = () => {
  const [formValue, setFormValue] = useState("");
  const isInitialRender = useRef(true);
  const [lists, setLists] = useState({
    todoList: [],
    inProgressList: [],
    closedList: [],
  });

  useEffect(() => {
    const lists = localStorage.getItem("lists");
    if (lists) setLists(JSON.parse(lists));
  }, []);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
    } else {
      localStorage.setItem("lists", JSON.stringify(lists));
    }
  }, [lists]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLists((prev) => ({
      ...prev,
      todoList: [
        ...prev.todoList,
        { value: formValue, id: new Date().getTime() },
      ],
    }));
    setFormValue("");
  };

  const handleReset = () => {
    setFormValue("");
  };

  return (
    <div className={`${styles.app}`}>
      <div className={styles.main}>
        <h1>Kanban Board</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className={styles.textField}
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
          />
          <br />
          <button type="submit" className={`${styles.btnSubmit} ${styles.btn}`}>
            Submit
          </button>
          <button
            type="reset"
            onClick={handleReset}
            className={`${styles.btnCancel} ${styles.btn}`}
          >
            Cancel
          </button>
        </form>
      </div>
      <div id={styles.statusContainers}>
        <KanbanBoardLists lists={lists} setLists={setLists} />
      </div>
    </div>
  );
};

export default KanbanBoard;

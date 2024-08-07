import { useState, useEffect, useRef } from "react";
import KanbanBoardList from "./KanbanBoardList";
import styles from "./kanbanBoard.module.css";

const KanbanBoard = () => {
  const [todoList, setTodoList] = useState([]);
  const [inProgressList, setInProgressList] = useState([]);
  const [closedList, setClosedList] = useState([]);
  const [value, setValue] = useState("");
  const [isEditId, setIsEditId] = useState(null);
  const [formValue, setFormValue] = useState("");
  const isInitialRenderTodo = useRef(true);
  const isInitialRenderInProgress = useRef(true);
  const isInitialRenderclosed = useRef(true);

  useEffect(() => {
    const todoListItems = localStorage.getItem("todoList");
    const inProgressListItems = localStorage.getItem("inProgressList");
    const closedListItems = localStorage.getItem("closedList");
    if (todoListItems) setTodoList(JSON.parse(todoListItems));
    if (inProgressListItems) setInProgressList(JSON.parse(inProgressListItems));
    if (closedListItems) setClosedList(JSON.parse(closedListItems));
  }, []);

  useEffect(() => {
    if (isInitialRenderTodo.current) {
      isInitialRenderTodo.current = false;
    } else {
      localStorage.setItem("todoList", JSON.stringify(todoList));
    }
  }, [todoList?.length]);

  useEffect(() => {
    if (isInitialRenderInProgress.current) {
      isInitialRenderInProgress.current = false;
    } else {
      localStorage.setItem("inProgressList", JSON.stringify(inProgressList));
    }
  }, [inProgressList?.length]);

  useEffect(() => {
    if (isInitialRenderclosed.current) {
      isInitialRenderclosed.current = false;
    } else {
      localStorage.setItem("closedList", JSON.stringify(closedList));
    }
  }, [closedList.length]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList((prevItems) => [
      ...prevItems,
      { value: formValue, id: new Date().getTime(), isDone: false },
    ]);
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
      <div id={styles.todoStatusContainers}>
        <KanbanBoardList
          todoList={todoList}
          setTodoList={setTodoList}
          inProgressList={inProgressList}
          closedList={closedList}
          setInProgressList={setInProgressList}
          setClosedList={setClosedList}
          isEditId={isEditId}
          setValue={setValue}
          value={value}
          setIsEditId={setIsEditId}
        />
      </div>
    </div>
  );
};

export default KanbanBoard;

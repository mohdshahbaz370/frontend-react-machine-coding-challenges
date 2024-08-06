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

  const handleFormCancel = () => {
    setFormValue("");
  };

  const handleTodoDelete = (id) => {
    setTodoList((prevItems) => prevItems.filter((itm) => itm.id !== id));
  };

  const handleInProgressDelete = (id) => {
    setInProgressList((prevItems) => prevItems.filter((itm) => itm.id !== id));
  };

  const handleClosedListDelete = (id) => {
    setClosedList((prevItems) => prevItems.filter((itm) => itm.id !== id));
  };

  const handleTodoEdit = ({ id, value }) => {
    setIsEditId(id);
    setValue(value);
  };

  const handleInProgressEdit = ({ id, value }) => {
    setIsEditId(id);
    setValue(value);
  };

  const handleClosedListEdit = ({ id, value }) => {
    setIsEditId(id);
    setValue(value);
  };

  return (
    <div className={`${styles.app}`}>
      <div className={styles.main}>
        <h1>TODO LIST DRAG AND DROP</h1>
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
            onClick={handleFormCancel}
            className={`${styles.btnCancel} ${styles.btn}`}
          >
            Cancel
          </button>
        </form>

        <div className={styles.hint}>
          <i>Double click on todo to toggle completion status</i>
        </div>
      </div>
      <div id={styles.todoStatusContainers}>
        <KanbanBoardList
          todoList={todoList}
          handleTodoDelete={handleTodoDelete}
          handleInProgressDelete={handleInProgressDelete}
          handleClosedListDelete={handleClosedListDelete}
          handleTodoEdit={handleTodoEdit}
          handleInProgressEdit={handleInProgressEdit}
          handleClosedListEdit={handleClosedListEdit}
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

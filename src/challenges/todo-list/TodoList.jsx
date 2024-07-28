import { useState, useEffect, useRef } from "react";
import List from "./List";
import styles from "./todoList.module.css";

const TodoList = () => {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");
  const [isEditId, setIsEditId] = useState(0);
  const initialRender = useRef(true);

  useEffect(() => {
    const items = localStorage.getItem("todoList");
    if (items) setList(JSON.parse(items));
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      localStorage.setItem("todoList", JSON.stringify(list));
    }
  }, [list]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditId) {
      setList((prevItems) =>
        prevItems.map((itm) => (itm.id === isEditId ? { ...itm, value } : itm))
      );
      setIsEditId(0);
    } else {
      setList((prevItems) => [
        ...prevItems,
        { value, id: new Date().getTime(), isDone: false },
      ]);
    }
    setValue("");
  };

  const handleCancel = () => {
    setValue("");
    setIsEditId(0);
  };

  const handleDoubleClick = (id) => {
    setList((prevItems) =>
      prevItems.map((itm) =>
        itm.id === id ? { ...itm, isDone: !itm.isDone } : itm
      )
    );
  };

  const handleDelete = (id) => {
    setList((prevItems) => prevItems.filter((itm) => itm.id !== id));
  };

  const handleEdit = ({ id, value }) => {
    setIsEditId(id);
    setValue(value);
  };

  return (
    <div className={styles.app}>
      <div className={styles.main}>
        <h1>TODO LIST</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className={styles.textField}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <br />
          <button
            type="submit"
            className={`${styles.btnSubmit} ${styles.btn}`}
            disabled={!value}
          >
            {isEditId ? "Update" : "Submit"}
          </button>
          <button
            type="reset"
            onClick={handleCancel}
            className={`${styles.btnCancel} ${styles.btn}`}
            disabled={!(value || isEditId)}
          >
            Cancel
          </button>
        </form>

        <div className={styles.hint}>
          <i>Double click on todo to toggle completion status</i>
        </div>
      </div>
      <List
        list={list}
        handleDoubleClick={handleDoubleClick}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default TodoList;

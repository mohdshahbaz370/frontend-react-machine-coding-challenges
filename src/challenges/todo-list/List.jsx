import styles from "./todoList.module.css";

const List = ({ list, handleDoubleClick, handleDelete, handleEdit }) => {
  return (
    <ul className={styles.ul}>
      {list.map((itm) => (
        <li
          onDoubleClick={() => handleDoubleClick(itm.id)}
          key={itm.id}
          className={styles.list}
        >
          <span className={itm.isDone ? styles.completed : ""}>
            {itm.value}
          </span>
          <span>
            <button
              className={`${styles.btnEdit} ${styles.btn}`}
              onClick={() => handleEdit(itm)}
            >
              Edit
            </button>
            <button
              className={`${styles.btnDelete} ${styles.btn}`}
              onClick={() => handleDelete(itm.id)}
            >
              Delete
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default List;

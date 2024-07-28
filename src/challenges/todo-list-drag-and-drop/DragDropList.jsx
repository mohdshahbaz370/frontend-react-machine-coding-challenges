import styles from "./todoListDragDrop.module.css";

const DragDropList = ({
  list,
  handleDoubleClick,
  handleDelete,
  handleEdit,
  setList,
}) => {
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("index", index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleOnDrop = (e, dropIndex) => {
    const itemIndex = e.dataTransfer.getData("index");
    const updatedList = [...list];
    const item = updatedList.splice(itemIndex, 1)?.[0];
    updatedList.splice(dropIndex, 0, item);
    setList(updatedList);
  };

  return (
    <ul>
      {list.map((itm, index) => (
        <li
          key={itm.id}
          onDoubleClick={() => handleDoubleClick(itm.id)}
          className={styles.list}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={handleDragOver}
          onDrop={(e) => handleOnDrop(e, index)}
          id={`drag_${itm.id}`}
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

export default DragDropList;

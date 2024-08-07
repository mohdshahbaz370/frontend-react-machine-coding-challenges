/* eslint-disable react/prop-types */
import React from "react";

const List = ({
  id,
  list,
  value,
  handleEdit,
  handleDelete,
  handleUpdate,
  setValue,
  styles,
  handleDragStart,
  handleDragOver,
  handleOnDrop,
  isEditId,
  handleContainerOnDrop,
  handleCancel,
}) => {
  return (
    <ul
      id={id}
      className={styles.todoStatusContainer}
      onDrop={(e) => handleContainerOnDrop(e, id)}
      onDragOver={handleDragOver}
    >
      {list.map((itm, index) => (
        <li
          key={itm.id}
          className={styles.todoList}
          draggable
          onDragStart={(e) => handleDragStart(e, index, itm.id, id)}
          onDragOver={handleDragOver}
          onDrop={(e) => handleOnDrop(e, index, id)}
          id={`drag_${itm.id}`}
        >
          {isEditId === itm.id ? (
            <>
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button
                className={`${styles.btnEdit} ${styles.btn}`}
                onClick={() => handleUpdate(id)}
              >
                Update
              </button>
              <button
                className={`${styles.btnCancel} ${styles.btn}`}
                onClick={handleCancel}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <span>{itm.value}</span>
              <button
                className={`${styles.btnEdit} ${styles.btn}`}
                onClick={() => handleEdit(itm)}
              >
                Edit
              </button>
              <button
                className={`${styles.btnDelete} ${styles.btn}`}
                onClick={() => handleDelete(itm.id, id)}
              >
                Delete
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default List;

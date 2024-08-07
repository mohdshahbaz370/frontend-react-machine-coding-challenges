/* eslint-disable react/prop-types */
import { getColumnHeadingName } from "./roleHelper";

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
      className={`${styles.statusContainer} ${styles.ul}`}
      onDrop={(e) => handleContainerOnDrop(e, id)}
      onDragOver={handleDragOver}
    >
      <h3 className={styles.statusField}>{getColumnHeadingName(id)}</h3>
      {list.length === 0 ? (
        <li className={styles.emptyList}>No items</li>
      ) : (
        list.map((itm, index) => (
          <li
            key={itm.id}
            className={styles.list}
            draggable
            onDragStart={(e) => handleDragStart(e, index, itm.id, id)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleOnDrop(e, index, id)}
          >
            {isEditId === itm.id ? (
              <>
                <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <div>
                  <button
                    className={`${styles.btnUpdate} ${styles.btn}`}
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
                </div>
              </>
            ) : (
              <>
                <div>{itm.value}</div>
                <div>
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
                </div>
              </>
            )}
          </li>
        ))
      )}
    </ul>
  );
};

export default List;

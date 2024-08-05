/* eslint-disable react/prop-types */
import styles from "./todoListDragDrop.module.css";

const DragDropList = ({
  todoList,
  handleTodoEdit,
  handleInProgressEdit,
  handleClosedListEdit,
  setTodoList,
  inProgressList,
  closedList,
  setInProgressList,
  setClosedList,
  handleClosedListDelete,
  handleInProgressDelete,
  handleTodoDelete,
  isEditId,
  setValue,
  value,
  setIsEditId,
}) => {
  const handleDragStart = (e, index, id) => {
    const parentId = e.target.parentElement.id;
    e.dataTransfer.setData(
      "data",
      JSON.stringify({ index, parentId: Number(parentId), id })
    );
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handletodoContainerOnDrop = (e) => {
    let draggedItemdata = e.dataTransfer.getData("data");
    draggedItemdata = JSON.parse(draggedItemdata);
    if (draggedItemdata.parentId === 2) {
      if (inProgressList?.length === 0) {
        setTodoList([inProgressList?.[draggedItemdata?.index]]);
      } else {
        setTodoList((prev) => [
          ...prev,
          inProgressList?.[draggedItemdata?.index],
        ]);
      }
      const updatedList = [...inProgressList];
      updatedList.splice(draggedItemdata?.index, 1);
      setInProgressList(updatedList);
    } else if (draggedItemdata.parentId === 3) {
      if (closedList?.length === 0) {
        setTodoList([closedList?.[draggedItemdata?.index]]);
      } else {
        setTodoList((prev) => [...prev, closedList?.[draggedItemdata?.index]]);
      }
      const updatedList = [...closedList];
      updatedList.splice(draggedItemdata?.index, 1);
      setClosedList(updatedList);
    }
  };

  const handleTodoOnDrop = (e, dropIndex) => {
    e.stopPropagation();
    let draggedItemdata = e.dataTransfer.getData("data");
    draggedItemdata = JSON.parse(draggedItemdata);
    const updatedList = [...todoList];
    if (updatedList?.find((itm) => itm.id === draggedItemdata.id)) {
      const item = updatedList.splice(draggedItemdata?.index, 1)?.[0];
      updatedList.splice(dropIndex, 0, item);
    } else {
      if (draggedItemdata.parentId === 2) {
        updatedList.splice(
          dropIndex,
          0,
          inProgressList?.[draggedItemdata?.index]
        );
        const updatedInProgresList = [...inProgressList];
        updatedInProgresList.splice(draggedItemdata?.index, 1);
        setInProgressList(updatedInProgresList);
      } else {
        updatedList.splice(dropIndex, 0, closedList?.[draggedItemdata?.index]);
        const updatedClosedList = [...closedList];
        updatedClosedList.splice(draggedItemdata?.index, 1);
        setClosedList(updatedClosedList);
      }
    }
    setTodoList(updatedList);
  };

  const handleInProgressContainerOnDrop = (e) => {
    let draggedItemdata = e.dataTransfer.getData("data");
    draggedItemdata = JSON.parse(draggedItemdata);
    if (draggedItemdata.parentId === 1) {
      if (todoList?.length === 0) {
        setInProgressList([todoList?.[draggedItemdata?.index]]);
      } else {
        setInProgressList((prev) => [
          ...prev,
          todoList?.[draggedItemdata?.index],
        ]);
      }
      const updatedList = [...todoList];
      updatedList.splice(draggedItemdata?.index, 1);
      setTodoList(updatedList);
    } else if (draggedItemdata.parentId === 3) {
      if (closedList?.length === 0) {
        setInProgressList([closedList?.[draggedItemdata?.index]]);
      } else {
        setInProgressList((prev) => [
          ...prev,
          closedList?.[draggedItemdata?.index],
        ]);
      }
      const updatedList = [...closedList];
      updatedList.splice(draggedItemdata?.index, 1);
      setClosedList(updatedList);
    }
  };

  const handleInProgressOnDrop = (e, dropIndex) => {
    e.stopPropagation();
    let draggedItemdata = e.dataTransfer.getData("data");
    draggedItemdata = JSON.parse(draggedItemdata);
    const updatedList = [...inProgressList];
    if (updatedList?.find((itm) => itm.id === draggedItemdata.id)) {
      const item = updatedList.splice(draggedItemdata?.index, 1)?.[0];
      updatedList.splice(dropIndex, 0, item);
    } else {
      if (draggedItemdata.parentId === 1) {
        updatedList.splice(dropIndex, 0, todoList?.[draggedItemdata?.index]);
        const updatedTodoList = [...todoList];
        updatedTodoList.splice(draggedItemdata?.index, 1);
        setTodoList(updatedTodoList);
      } else {
        updatedList.splice(dropIndex, 0, closedList?.[draggedItemdata?.index]);
        const updatedClosedList = [...closedList];
        updatedClosedList.splice(draggedItemdata?.index, 1);
        setClosedList(updatedClosedList);
      }
    }
    setInProgressList(updatedList);
  };

  const handleClosedContainerOnDrop = (e) => {
    let draggedItemdata = e.dataTransfer.getData("data");
    draggedItemdata = JSON.parse(draggedItemdata);
    if (draggedItemdata.parentId === 1) {
      if (todoList?.length === 0) {
        setClosedList([todoList?.[draggedItemdata?.index]]);
      } else {
        setClosedList((prev) => [...prev, todoList?.[draggedItemdata?.index]]);
      }
      const updatedList = [...todoList];
      updatedList.splice(draggedItemdata?.index, 1);
      setTodoList(updatedList);
    } else if (draggedItemdata.parentId === 2) {
      if (inProgressList?.length === 0) {
        setClosedList([inProgressList?.[draggedItemdata?.index]]);
      } else {
        setClosedList((prev) => [
          ...prev,
          inProgressList?.[draggedItemdata?.index],
        ]);
      }
      const updatedList = [...inProgressList];
      updatedList.splice(draggedItemdata?.index, 1);
      setInProgressList(updatedList);
    }
  };

  const handleClosedOnDrop = (e, dropIndex) => {
    e.stopPropagation();
    let draggedItemdata = e.dataTransfer.getData("data");
    draggedItemdata = JSON.parse(draggedItemdata);
    const updatedList = [...closedList];
    if (updatedList?.find((itm) => itm.id === draggedItemdata.id)) {
      const item = updatedList.splice(draggedItemdata?.index, 1)?.[0];
      updatedList.splice(dropIndex, 0, item);
    } else {
      if (draggedItemdata.parentId === 1) {
        updatedList.splice(dropIndex, 0, todoList?.[draggedItemdata?.index]);
        const updatedTodoList = [...todoList];
        updatedTodoList.splice(draggedItemdata?.index, 1);
        setTodoList(updatedTodoList);
      } else {
        updatedList.splice(
          dropIndex,
          0,
          inProgressList?.[draggedItemdata?.index]
        );
        const updatedInProgressList = [...inProgressList];
        updatedInProgressList.splice(draggedItemdata?.index, 1);
        setInProgressList(updatedInProgressList);
      }
    }
    setClosedList(updatedList);
  };

  const handleTodoUpdate = () => {
    setTodoList((prevItems) =>
      prevItems.map((itm) => (itm.id === isEditId ? { ...itm, value } : itm))
    );
    setIsEditId(null);
    setValue("");
  };

  const handleInProgressUpdate = () => {
    setInProgressList((prevItems) =>
      prevItems.map((itm) => (itm.id === isEditId ? { ...itm, value } : itm))
    );
    setIsEditId(null);
    setValue("");
  };

  const handleClosedListUpdate = () => {
    setClosedList((prevItems) =>
      prevItems.map((itm) => (itm.id === isEditId ? { ...itm, value } : itm))
    );
    setIsEditId(null);
    setValue("");
  };

  return (
    <>
      <ul
        id={1}
        className={styles.todoStatusContainer}
        onDrop={handletodoContainerOnDrop}
        onDragOver={handleDragOver}
      >
        {todoList.map((itm, index) => (
          <li
            key={itm.id}
            className={styles.todoList}
            draggable
            onDragStart={(e) => handleDragStart(e, index, itm.id)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleTodoOnDrop(e, index)}
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
                  onClick={handleTodoUpdate}
                >
                  Update
                </button>
              </>
            ) : (
              <>
                <span className={itm.isDone ? styles.completed : ""}>
                  {itm.value}
                </span>
                <button
                  className={`${styles.btnEdit} ${styles.btn}`}
                  onClick={() => handleTodoEdit(itm)}
                >
                  Edit
                </button>
              </>
            )}
            <button
              className={`${styles.btnDelete} ${styles.btn}`}
              onClick={() => handleTodoDelete(itm.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <ul
        id={2}
        onDrop={handleInProgressContainerOnDrop}
        onDragOver={handleDragOver}
        className={styles.todoStatusContainer}
      >
        {inProgressList.map((itm, index) => (
          <li
            key={itm.id}
            className={styles.todoList}
            draggable
            onDragStart={(e) => handleDragStart(e, index, itm.id)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleInProgressOnDrop(e, index)}
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
                  onClick={handleInProgressUpdate}
                >
                  Update
                </button>
              </>
            ) : (
              <>
                <span className={itm.isDone ? styles.completed : ""}>
                  {itm.value}
                </span>
                <button
                  className={`${styles.btnEdit} ${styles.btn}`}
                  onClick={() => handleInProgressEdit(itm)}
                >
                  Edit
                </button>
              </>
            )}
            <button
              className={`${styles.btnDelete} ${styles.btn}`}
              onClick={() => handleInProgressDelete(itm.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <ul
        id={3}
        onDrop={handleClosedContainerOnDrop}
        onDragOver={handleDragOver}
        className={styles.todoStatusContainer}
      >
        {closedList.map((itm, index) => (
          <li
            key={itm.id}
            className={styles.todoList}
            draggable
            onDragStart={(e) => handleDragStart(e, index, itm.id)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleClosedOnDrop(e, index)}
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
                  onClick={handleClosedListUpdate}
                >
                  Update
                </button>
              </>
            ) : (
              <>
                <span className={itm.isDone ? styles.completed : ""}>
                  {itm.value}
                </span>
                <button
                  className={`${styles.btnEdit} ${styles.btn}`}
                  onClick={() => handleClosedListEdit(itm)}
                >
                  Edit
                </button>
              </>
            )}
            <button
              className={`${styles.btnDelete} ${styles.btn}`}
              onClick={() => handleClosedListDelete(itm.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DragDropList;

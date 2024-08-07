/* eslint-disable react/prop-types */
import styles from "./kanbanBoard.module.css";
import List from "./List";

const KanbanBoardList = ({
  todoList,
  setTodoList,
  inProgressList,
  closedList,
  setInProgressList,
  setClosedList,
  isEditId,
  setValue,
  value,
  setIsEditId,
}) => {
  const handleDragStart = (e, index, id, columnId) => {
    e.dataTransfer.setData(
      "data",
      JSON.stringify({ index, parentId: columnId, id })
    );
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleContainerOnDrop = (e, columnId) => {
    let draggedItemdata = e.dataTransfer.getData("data");
    draggedItemdata = JSON.parse(draggedItemdata);
    if (columnId === 1) {
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
          setTodoList((prev) => [
            ...prev,
            closedList?.[draggedItemdata?.index],
          ]);
        }
        const updatedList = [...closedList];
        updatedList.splice(draggedItemdata?.index, 1);
        setClosedList(updatedList);
      }
    } else if (columnId === 2) {
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
    } else {
      if (draggedItemdata.parentId === 1) {
        if (todoList?.length === 0) {
          setClosedList([todoList?.[draggedItemdata?.index]]);
        } else {
          setClosedList((prev) => [
            ...prev,
            todoList?.[draggedItemdata?.index],
          ]);
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
    }
  };

  const handleOnDrop = (e, dropIndex, columnId) => {
    e.stopPropagation();
    let draggedItemdata = e.dataTransfer.getData("data");
    draggedItemdata = JSON.parse(draggedItemdata);
    if (columnId === 1) {
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
          const updatedInProgressList = [...inProgressList];
          updatedInProgressList.splice(draggedItemdata?.index, 1);
          setInProgressList(updatedInProgressList);
        } else {
          updatedList.splice(
            dropIndex,
            0,
            closedList?.[draggedItemdata?.index]
          );
          const updatedClosedList = [...closedList];
          updatedClosedList.splice(draggedItemdata?.index, 1);
          setClosedList(updatedClosedList);
        }
      }
      setTodoList(updatedList);
    } else if (columnId === 2) {
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
          updatedList.splice(
            dropIndex,
            0,
            closedList?.[draggedItemdata?.index]
          );
          const updatedClosedList = [...closedList];
          updatedClosedList.splice(draggedItemdata?.index, 1);
          setClosedList(updatedClosedList);
        }
      }
      setInProgressList(updatedList);
    } else {
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
    }
  };

  const handleUpdate = (columnId) => {
    if (columnId === 1) {
      setTodoList((prevItems) =>
        prevItems.map((itm) => (itm.id === isEditId ? { ...itm, value } : itm))
      );
    } else if (columnId === 2) {
      setInProgressList((prevItems) =>
        prevItems.map((itm) => (itm.id === isEditId ? { ...itm, value } : itm))
      );
    } else {
      setClosedList((prevItems) =>
        prevItems.map((itm) => (itm.id === isEditId ? { ...itm, value } : itm))
      );
    }
    setIsEditId(null);
    setValue("");
  };

  const handleDelete = (id, columnId) => {
    if (columnId === 1) {
      setTodoList((prevItems) => prevItems.filter((itm) => itm.id !== id));
    } else if (columnId === 2) {
      setInProgressList((prevItems) =>
        prevItems.filter((itm) => itm.id !== id)
      );
    } else {
      setClosedList((prevItems) => prevItems.filter((itm) => itm.id !== id));
    }
  };

  const handleEdit = ({ id, value }) => {
    setIsEditId(id);
    setValue(value);
  };

  const handleCancel = () => {
    setIsEditId("");
  };

  return (
    <>
      <List
        id={1}
        list={todoList}
        styles={styles}
        handleDragStart={handleDragStart}
        handleDragOver={handleDragOver}
        handleOnDrop={handleOnDrop}
        isEditId={isEditId}
        value={value}
        setValue={setValue}
        handleUpdate={handleUpdate}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleContainerOnDrop={handleContainerOnDrop}
        handleCancel={handleCancel}
      />
      <List
        id={2}
        list={inProgressList}
        styles={styles}
        handleDragStart={handleDragStart}
        handleDragOver={handleDragOver}
        handleOnDrop={handleOnDrop}
        isEditId={isEditId}
        value={value}
        setValue={setValue}
        handleUpdate={handleUpdate}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleContainerOnDrop={handleContainerOnDrop}
        handleCancel={handleCancel}
      />
      <List
        id={3}
        list={closedList}
        styles={styles}
        handleDragStart={handleDragStart}
        handleDragOver={handleDragOver}
        handleOnDrop={handleOnDrop}
        isEditId={isEditId}
        value={value}
        setValue={setValue}
        handleUpdate={handleUpdate}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleContainerOnDrop={handleContainerOnDrop}
        handleCancel={handleCancel}
      />
    </>
  );
};

export default KanbanBoardList;

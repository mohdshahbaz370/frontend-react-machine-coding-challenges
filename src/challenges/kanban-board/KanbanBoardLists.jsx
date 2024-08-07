/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./kanbanBoard.module.css";
import List from "./List";
import useDragAndDrop from "./useDragAndDrop";
import { getColumnName } from "./roleHelper";

const KanbanBoardLists = ({ lists, setLists }) => {
  const [value, setValue] = useState("");
  const [isEditId, setIsEditId] = useState(null);

  const {
    handleDragStart,
    handleDragOver,
    handleOnDrop,
    handleContainerOnDrop,
  } = useDragAndDrop({
    lists,
    setLists,
  });

  const handleUpdate = (columnId) => {
    const columnName = getColumnName(columnId);
    setLists((prev) => ({
      ...prev,
      [columnName]: prev[columnName].map((itm) =>
        itm.id === isEditId ? { ...itm, value } : itm
      ),
    }));
    setIsEditId(null);
    setValue("");
  };

  const handleDelete = (id, columnId) => {
    const columnName = getColumnName(columnId);
    setLists((prev) => ({
      ...prev,
      [columnName]: prev[columnName].filter((itm) => itm.id !== id),
    }));
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
        list={lists.todoList}
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
        list={lists.inProgressList}
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
        list={lists.closedList}
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

export default KanbanBoardLists;

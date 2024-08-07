import { getColumnName } from "./roleHelper";

const useDragAndDrop = ({ lists, setLists }) => {
  const handleDragStart = (e, index, id, columnId) => {
    e.dataTransfer.setData(
      "data",
      JSON.stringify({ index, parentId: columnId, id })
    );
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleOnDrop = (e, dropIndex, columnId) => {
    e.stopPropagation();
    const draggedItemdata = JSON.parse(e.dataTransfer.getData("data"));
    const sourceColumn = getColumnName(draggedItemdata.parentId);
    const targetColumn = getColumnName(columnId);
    const sourceList = lists[sourceColumn];
    const targetList = lists[targetColumn];
    const [draggedItem] = sourceList.splice(draggedItemdata.index, 1);
    targetList.splice(dropIndex, 0, draggedItem);
    setLists((prev) => ({
      ...prev,
      [sourceColumn]: sourceList,
      [targetColumn]: targetList,
    }));
  };

  const handleContainerOnDrop = (e, columnId) => {
    const draggedItemdata = JSON.parse(e.dataTransfer.getData("data"));
    const sourceColumn = getColumnName(draggedItemdata.parentId);
    const targetColumn = getColumnName(columnId);
    const sourceList = lists[sourceColumn];
    const targetList = lists[targetColumn];
    const [draggedItem] = sourceList.splice(draggedItemdata.index, 1);
    targetList.push(draggedItem);
    setLists((prev) => ({
      ...prev,
      [sourceColumn]: sourceList,
      [targetColumn]: targetList,
    }));
  };

  return {
    handleDragStart,
    handleDragOver,
    handleOnDrop,
    handleContainerOnDrop,
  };
};

export default useDragAndDrop;

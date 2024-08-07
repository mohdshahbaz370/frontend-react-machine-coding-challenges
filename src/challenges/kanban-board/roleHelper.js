export const getColumnName = (columnId) => {
  switch (columnId) {
    case 1:
      return "todoList";
    case 2:
      return "inProgressList";
    case 3:
      return "closedList";
  }
};

export const getColumnHeadingName = (columnId) => {
  switch (columnId) {
    case 1:
      return "Todo";
    case 2:
      return "In Progress";
    case 3:
      return "Closed";
  }
};

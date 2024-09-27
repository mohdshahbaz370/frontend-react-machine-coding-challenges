import React, { useState } from "react";
import Controls from "./Controls";
import Table from "./Table";
import styles from "./columnTable.module.css";

const createMatrix = (rows, columns) => {
  const matrix = [];
  let counter = 0;
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < columns; j++) {
      row.push(counter);
      counter++;
    }
    matrix.push(row);
  }
  return matrix;
};

const ColumnTable = () => {
  const [rows, setRows] = useState(2);
  const [columns, setColumns] = useState(2);
  const matrix = createMatrix(rows, columns);

  return (
    <div className={styles.container}>
      <h1>Column Table</h1>
      <Controls
        rows={rows}
        columns={columns}
        setRows={setRows}
        setColumns={setColumns}
      />
      <Table matrix={matrix} />
    </div>
  );
};

export default ColumnTable;

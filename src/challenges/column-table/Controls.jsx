import React from "react";
import styles from "./columnTable.module.css";

const Controls = ({ rows, columns, setRows, setColumns }) => {
  return (
    <section className={styles.section}>
      <label>
        Set number of rows:
        <input
          type="range"
          id="rows"
          value={rows}
          min="2"
          max="8"
          onChange={(e) => setRows(+e.target.value)}
        />
      </label>
      <label>
        Set number of columns:
        <input
          type="range"
          id="columns"
          value={columns}
          min="2"
          max="8"
          onChange={(e) => setColumns(+e.target.value)}
        />
      </label>
    </section>
  );
};

export default Controls;

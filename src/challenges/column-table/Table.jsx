import React from "react";
import styles from "./columnTable.module.css";

const Table = ({ matrix }) => {
  return (
    <>
      <table className={styles.table}>
        <tbody>
          {matrix?.map((row, index) => (
            <tr key={index}>
              {row?.map((itm) => (
                <td className={styles.td} key={itm}>
                  {itm}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;

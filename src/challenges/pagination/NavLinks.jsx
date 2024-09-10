import React from "react";
import styles from "./pagination.module.css";

const NavLinks = ({ currentPage, setCurrentPage, nPages }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const handleGoToPreviousPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  const handleGoToNextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  return (
    <nav>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <a href="#" onClick={handleGoToPreviousPage}>
            Previous
          </a>
        </li>
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber} className={styles.li}>
            <a href="#" onClick={() => setCurrentPage(pageNumber)}>
              {pageNumber}
            </a>
          </li>
        ))}
        <li className={styles.li}>
          <a href="#" onClick={handleGoToNextPage}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;

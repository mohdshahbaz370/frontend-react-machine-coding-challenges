import React, { useEffect, useState } from "react";
import styles from "./pagination.module.css";
import Records from "./Records";
import NavLinks from "./NavLinks";

const Pagination = () => {
  const [recordsPerPage] = useState(4);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndexRecord = currentPage * recordsPerPage;
  const firstIndexRecord = lastIndexRecord - recordsPerPage;
  const nPages = Math.ceil(data?.length / recordsPerPage);
  const currentRecords = data?.slice(firstIndexRecord, lastIndexRecord);

  useEffect(() => {
    setLoading(true);
    fetch("/src/challenges/pagination/data.json")
      .then((data) => {
        return data.json();
      })
      .then((data) => setData(data))
      .catch((error) => alert(error));
    setLoading(false);
  }, []);

  return (
    <div className={styles.container}>
      <h1>Pagination Footer Nav Links</h1>
      <Records data={currentRecords} loading={loading} />
      <NavLinks
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        nPages={nPages}
      />
    </div>
  );
};

export default Pagination;

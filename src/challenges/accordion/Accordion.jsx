import React, { useState, useEffect } from "react";
import styles from "./accordion.module.css";

const Accordion = (props) => {
  const { accordionId, handleAccordionId, id, title, description } = props;
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow((prev) => !prev);
    handleAccordionId(id);
  };

  useEffect(() => {
    if (accordionId) {
      setShow(accordionId === id);
    }
  }, [id, accordionId]);

  return (
    <div key={id} className={styles.section}>
      <div className={styles.heading}>
        {/* <div className={styles.title}>{title}</div> */}
        <h2>{title}</h2>
        <div className={styles.button} onClick={handleShow}>
          {" "}
          {show ? "+" : "-"}
        </div>
      </div>
      {show && <div className={styles.description}>{description}</div>}
    </div>
  );
};

export default Accordion;

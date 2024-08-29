import React, { useState } from "react";
import { data } from "./data";
import Accordion from "./Accordion";
import styles from "./accordion.module.css";

const AccordionApp = () => {
  const [accordionId, setAccordionId] = useState(null);
  const [multiple, setMultiple] = useState(true);

  const handleAccordionId = (accordionId) => {
    setAccordionId(multiple ? null : accordionId);
  };

  const handleMultiple = () => {
    if (multiple) {
      setAccordionId(-1);
    }
    setMultiple(!multiple);
  };

  return (
    <div className={styles.container}>
      <label>
        <b>Is multiple open accordion allowed?</b>
        <input type="checkbox" checked={multiple} onChange={handleMultiple} />
      </label>
      {data.map((obj) => (
        <Accordion
          key={obj.id}
          accordionId={accordionId}
          handleAccordionId={handleAccordionId}
          {...obj}
        />
      ))}
    </div>
  );
};

export default AccordionApp;

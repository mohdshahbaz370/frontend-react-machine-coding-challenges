import React, { useState } from "react";
import { imagesData } from "./imagesData.js";
import styles from "./loadMoreBtn.module.css";

const LoadMoreBtn = () => {
  const perRowData = 4;
  const [data] = useState(imagesData);
  const [dataLength, setDataLength] = useState(perRowData);

  return (
    <>
      <div className={styles.container}>
        {data?.slice(0, dataLength)?.map((image) => (
          <img
            key={image?.id}
            className={styles.image}
            src={image?.url}
            alt="cat"
            height="200"
            width="200"
          />
        ))}{" "}
      </div>
      {dataLength < data?.length && (
        <div>
          <button onClick={() => setDataLength(dataLength + perRowData)}>
            LoadMoreBtn
          </button>
        </div>
      )}
    </>
  );
};

export default LoadMoreBtn;

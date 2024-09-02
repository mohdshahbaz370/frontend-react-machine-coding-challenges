import React from "react";
import { useToast } from "./useToast";
import ToastItem from "./ToastItem";
import styles from "./toast.module.css";

export default function Toast() {
  const {
    type,
    setType,
    duration,
    setDuration,
    horizontalPosition,
    setHorizontalPosition,
    verticalPosition,
    setVerticalPosition,
    showItem,
    hideItem,
    toastMessages,
    setMessage,
    message,
  } = useToast();
  const toastClassName = `tc${horizontalPosition}${verticalPosition}`;
  return (
    <div className={styles.mainContainer}>
      <h2>Toast Popup</h2>
      <form className={styles.form}>
        <select
          id="horizontal"
          value={horizontalPosition}
          onChange={(e) => setHorizontalPosition(e.target.value)}
        >
          <option value="left">Left</option>
          <option value="right">Right</option>
        </select>
        <select
          id="vertical"
          value={verticalPosition}
          onChange={(e) => setVerticalPosition(e.target.value)}
        >
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
        </select>
        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="success">Success</option>
          <option value="failed">Failed</option>
          <option value="warning">Warning</option>
          <option value="info">Info</option>
        </select>
        <input
          type="range"
          id="duration"
          min="3"
          max="10"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="button" onClick={() => showItem()}>
          Show Popup
        </button>
        <div className={`${styles.container} ${styles[toastClassName]}`}>
          {toastMessages?.length
            ? toastMessages?.map((message) => (
                <ToastItem key={message.id} {...message} hideItem={hideItem} />
              ))
            : null}
        </div>
      </form>
    </div>
  );
}

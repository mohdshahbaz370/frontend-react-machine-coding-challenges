import styles from "./toast.module.css";

const ToastItem = ({ message, type, hideItem, id }) => {
  return (
    <div className={`${styles[type]} ${styles.toast}`}>
      {message}
      <button onClick={() => hideItem(id)}>X</button>
    </div>
  );
};

export default ToastItem;

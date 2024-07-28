import styles from "./StarRating.module.css";

const Star = ({ starId, marked }) => {
  return (
    <span className={styles.star} data-index={starId} role="button">
      {marked ? "\u2605" : "\u2606"}
    </span>
  );
};

export default Star;

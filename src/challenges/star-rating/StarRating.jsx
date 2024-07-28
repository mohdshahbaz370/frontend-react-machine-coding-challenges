import { useState, useMemo } from "react";
import Star from "./Star";
import styles from "./StarRating.module.css";

const StarRating = ({ value, total }) => {
  const [rating, setRating] = useState(value || 0);
  const [selected, setSelected] = useState(0);
  const totalStars = useMemo(() => Array.from({ length: total }), [total]);
  const onMouseOver = (e) => {
    setSelected(e.target.dataset.index ?? 0);
  };
  const onMouseOut = () => {
    setSelected(0);
  };

  const onClick = (e) => {
    setRating(e.target.dataset.index ?? rating);
  };

  return (
    <div className={styles.App}>
      <h1>Star Rating</h1>
      <div onMouseOut={onMouseOut} onClick={onClick} onMouseOver={onMouseOver}>
        {totalStars?.map((_, index) => (
          <Star
            starId={index + 1}
            key={`star_${index + 1}`}
            marked={(selected || rating) > index}
          />
        ))}
      </div>
    </div>
  );
};

export default StarRating;

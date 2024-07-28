import { useCallback, useState, useRef } from "react";
import useSearch from "./useSearch";
import styles from "./infiniteScroll.module.css";

const InfiniteScroll = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, error, data, hasMore } = useSearch(pageNumber);
  const observer = useRef();

  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((elements) => {
        if (elements?.[0].isIntersecting && hasMore) {
          setPageNumber((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div className={styles.container}>
      {data.map((itm, index) => {
        if (data?.length === index + 1) {
          return (
            <div className={styles.item} key={itm?.id} ref={lastBookElementRef}>
              {itm?.title}
            </div>
          );
        } else {
          return (
            <div className={styles.item} key={itm?.id}>
              {itm?.title}
            </div>
          );
        }
      })}
      {loading && <div>...loading</div>}
      {error && <div>error occured</div>}
    </div>
  );
};

export default InfiniteScroll;

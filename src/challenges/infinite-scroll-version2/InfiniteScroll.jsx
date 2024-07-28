import { useCallback, useState, useRef, useEffect } from "react";
import useSearch from "./useSearch";
import styles from "./infiniteScroll.module.css";

const InfiniteScroll = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [query, setQuery] = useState("");
  const { loading, error, data, hasMore } = useSearch(pageNumber, query);
  const observer = useRef();

  const handleChange = (e) => {
    setQuery(e.target.value);
    setPageNumber(1);
  };

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
  console.log("///", data);
  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.search}
        placeholder="Search..."
        onChange={handleChange}
        value={query}
      />
      {data.map((book, index) => {
        if (data?.length === index + 1) {
          return (
            <div className={styles.item} key={book} ref={lastBookElementRef}>
              {book}
            </div>
          );
        } else {
          return (
            <div className={styles.item} key={book}>
              {book}
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

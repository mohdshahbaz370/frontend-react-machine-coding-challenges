import { useState, useEffect } from "react";
import axios from "axios";

const useSearch = (pageNumber, query) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  console.log("...", query);
  useEffect(() => {
    setData([]);
  }, [query]);

  useEffect(() => {
    setError(false);
    setLoading(true);
    let cancel;
    axios({
      method: "GET",
      url: "http://openlibrary.org/search.json",
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((response) => {
        setData((prevData) => [
          ...new Set([
            ...prevData,
            ...response.data.docs.map((itm) => itm.title),
          ]),
        ]);
        setHasMore(!(response.data.docs.length === 0));
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    setLoading(false);

    return () => cancel();
  }, [pageNumber, query]);
  return { loading, error, data, hasMore };
};

export default useSearch;

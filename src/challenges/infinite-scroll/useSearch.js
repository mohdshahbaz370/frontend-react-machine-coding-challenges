import { useState, useEffect } from "react";
import axios from "axios";

const useSearch = (pageNumber) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  useEffect(() => {
    setError(false);
    setLoading(true);
    let cancel;
    axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/photos",
      params: { _page: pageNumber, _limit: 10 },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((response) => {
        setData((prevData) => [...prevData, ...response.data]);
        setHasMore(
          !(response.data.at(-1)?.id === 5000 || response.data.length === 0)
        );
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    setLoading(false);

    return () => cancel();
  }, [pageNumber]);
  return { loading, error, data, hasMore };
};

export default useSearch;

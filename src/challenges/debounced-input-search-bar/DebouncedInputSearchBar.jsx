import React from "react";

const getData = () => {
  console.log("shahbaz");
};

const debounce = (func, ms) => {
  let timerId;
  return () => {
    clearTimeout(timerId);
    timerId = setTimeout(func, ms);
  };
};

const InputSearchBar = () => {
  const handleOnKeyUp = debounce(getData, 1000);

  return (
    <>
      <h1>Dobounced Search bar</h1>
      <input type="text" onKeyUp={handleOnKeyUp} />
    </>
  );
};

export default InputSearchBar;

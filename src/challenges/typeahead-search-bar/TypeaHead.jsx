import React from "react";
import styles from "./typeaHead.module.css";
import { useAutoComplete } from "./hooks/useAutoComplete";

const TypeaHead = () => {
  const {
    suggestions,
    value,
    handleKeyDown,
    handleOnClick,
    handleOnChange,
    suggestionFocus,
    setSuggestionFocus,
  } = useAutoComplete();

  // useEffect(() => {
  //   fetch("https://potterapi-fedeperin.vercel.app/es/characters?search=Weasley")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //     });
  // }, []);

  return (
    <div className={styles.container}>
      <h1>TypeaHead Search Bar</h1>
      <h2>Use up & down arrows to navigate suggestions</h2>
      <input
        type="search"
        className={styles.searchBar}
        // autoComplete="off"
        // spellCheck="false"
        // aria-label="Search"
        // role="combobox"
        // aria-autocomplete="list"
        placeholder="Search..."
        onKeyDown={handleKeyDown}
        value={value}
        onChange={handleOnChange}
      />
      {suggestions?.length ? (
        <ul className={styles.ul}>
          {suggestions?.map((suggestion, index) => (
            <li
              className={suggestionFocus === index ? `${styles.list}` : ""}
              style={{ border: "1px solid black" }}
              key={index}
              onClick={() => handleOnClick(suggestion?.fullName)}
              onMouseOver={() => setSuggestionFocus(index)}
              onMouseLeave={() => setSuggestionFocus(null)}
            >
              {suggestion?.fullName}
            </li>
          ))}
        </ul>
      ) : (
        <p>no suggestions</p>
      )}
    </div>
  );
};

export default TypeaHead;

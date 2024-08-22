import { useState, useEffect } from "react";
import { useDebounce } from "./useDebounce";

export function useAutoComplete() {
  const [suggestions, setSuggestions] = useState([]);
  const [value, setValue] = useState("");
  const [suggestionFocus, setSuggestionFocus] = useState(null);

  useEffect(() => {
    if (suggestionFocus !== null) {
      setValue(suggestions[suggestionFocus]?.fullName);
    }
  }, [suggestionFocus]);

  const resetSuggestions = () => {
    setSuggestions([]);
    setSuggestionFocus(null);
  };

  const getData = async (text) => {
    try {
      let res = await fetch(
        `https://potterapi-fedeperin.vercel.app/es/characters?search=${text}`
      );
      res = await res.json();
      setSuggestions(res.slice(0, 6));
    } catch (error) {
      console.log(error);
    }
  };

  const debouncedGetData = useDebounce(getData, 500);

  const handleOnClick = (suggestion) => {
    setValue(suggestion);
    resetSuggestions();
  };

  const handleOnChange = (e) => {
    const text = e.target.value;
    if (text?.length === 0) {
      resetSuggestions();
    } else {
      debouncedGetData(text);
    }
    setValue(text);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && suggestionFocus !== null) {
      setValue(e.target.value);
      resetSuggestions();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (suggestionFocus === 0 || suggestionFocus === null) {
        setSuggestionFocus(suggestions?.length - 1);
      } else {
        setSuggestionFocus(suggestionFocus - 1);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (
        suggestionFocus === suggestions?.length - 1 ||
        suggestionFocus === null
      ) {
        setSuggestionFocus(0);
      } else {
        setSuggestionFocus(suggestionFocus + 1);
      }
    }
  };

  return {
    suggestions,
    value,
    handleKeyDown,
    handleOnClick,
    handleOnChange,
    suggestionFocus,
    setSuggestionFocus,
  };
}

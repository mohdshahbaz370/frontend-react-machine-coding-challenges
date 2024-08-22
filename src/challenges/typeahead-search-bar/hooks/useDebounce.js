import { useRef } from "react";
// export const debounce = (func, ms) => {
//   let timerId;
//   return (...args) => {
//     clearTimeout(timerId);
//     timerId = setTimeout(() => {
//       func(...args);
//     }, ms);
//   };
// };

export const useDebounce = (func, ms) => {
  const timerId = useRef(null);
  return (...args) => {
    if (timerId.current) {
      clearTimeout(timerId.current);
    }
    timerId.current = setTimeout(() => {
      func(...args);
    }, ms);
  };
};

import { useState, useEffect } from "react";

export const useToast = () => {
  const [toastMessages, setToastMessages] = useState([]);
  const [type, setType] = useState("success");
  const [duration, setDuration] = useState(3);
  const [horizontalPosition, setHorizontalPosition] = useState("left");
  const [verticalPosition, setVerticalPosition] = useState("top");
  const [message, setMessage] = useState("toaster!");
  const timerIds = [];

  useEffect(() => {
    return () => timerIds.forEach((timerId) => clearTimeout(timerId));
  }, []);

  const showItem = () => {
    const newMessage = {
      id: Date.now(),
      message,
      type,
    };
    setToastMessages((prevMessages) => [...prevMessages, newMessage]);
    const timerId = setTimeout(
      () =>
        setToastMessages((prevMessages) =>
          prevMessages.filter((message) => message.id !== newMessage.id)
        ),
      duration * 1000
    );
    timerIds.push(timerId);
  };

  const hideItem = (id) => {
    setToastMessages((prevtoastMessage) =>
      prevtoastMessage.filter((message) => message.id !== id)
    );
  };
  return {
    type,
    setType,
    duration,
    setDuration,
    horizontalPosition,
    setHorizontalPosition,
    verticalPosition,
    setVerticalPosition,
    showItem,
    hideItem,
    toastMessages,
    setMessage,
    message,
  };
};

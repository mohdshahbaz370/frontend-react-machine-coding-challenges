import React from "react";

const ThrottledShootingGame = () => {
  const shoot = () => {
    console.log("firing");
  };

  // First Method:
  // const throttle = (func, ms) => {
  //   let previousTime = 0;
  //   return () => {
  //     const currentTime = new Date().getTime();
  //     if (currentTime - previousTime > ms) {
  //       func();
  //       previousTime = currentTime;
  //     } else {
  //       console.log("reloading");
  //     }
  //   };
  // };

  // Second Method:
  const throttle = (func, ms) => {
    let shouldWait = false;
    return () => {
      if (shouldWait) {
        console.log("reloading");
        return;
      }
      func();
      shouldWait = true;
      setTimeout(() => {
        shouldWait = false;
      }, ms);
    };
  };

  const ThrottledFunction = throttle(shoot, 2000);

  return (
    <>
      <h1>Trottled Shooting Game</h1>
      <h2>click on button to shoot</h2>
      <button onClick={ThrottledFunction}>Shoot</button>
    </>
  );
};

export default ThrottledShootingGame;

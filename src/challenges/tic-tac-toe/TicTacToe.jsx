import { useState, useEffect } from "react";
import styles from "./ticTacToe.module.css";
import { initialSquares, winningPatterns } from "./constants";

const TicTacToe = () => {
  const [squares, setSquares] = useState(initialSquares);
  const [isX, setIsX] = useState(false);
  const [[xWins, oWins, draw], setPlayerWins] = useState([0, 0, 0]);
  const [winner, setWinner] = useState(null);

  useEffect(() => computeWin(), [squares]);

  // useEffect(() => {
  //   if (winner === "X") {
  //     setPlayerWins([xWins + 1, oWins, draw]);
  //   } else if (winner === "O") {
  //     setPlayerWins([xWins, oWins + 1, draw]);
  //   } else if (
  //     winner === null &&
  //     squares.filter((square) => square === null).length === 0
  //   ) {
  //     setPlayerWins([xWins, oWins, draw + 1]);
  //   }
  // }, [squares, winner]);

  const computeWin = () => {
    setIsX(!isX);
    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;
      if (
        squares[a] !== null &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        if (squares[a] === 1) {
          setWinner("X is winner");
          setPlayerWins([xWins + 1, oWins, draw]);
        } else {
          setWinner("O is winner");
          setPlayerWins([xWins, oWins + 1, draw]);
        }
        return;
      }
    }
    if (squares.filter((square) => square === null).length === 0) {
      setWinner("Match is draw");
      setPlayerWins([xWins, oWins, draw + 1]);
    }
  };

  const onEntry = (iTh) => {
    if (squares[iTh] === null && winner === null) {
      setSquares((previousSquares) => {
        const _previousSquares = [...previousSquares];
        _previousSquares[iTh] = isX ? 1 : 0;
        return _previousSquares;
      });
    }
  };

  const rematch = () => {
    setSquares(initialSquares);
    setWinner(null);
  };
  const Square = ({ value, iTh, onEntry }) => {
    const handleClick = () => {
      onEntry(iTh);
    };

    return (
      <div className={styles.flexItems} onClick={handleClick}>
        <div className={styles.item}>
          {value === null ? null : value === 1 ? "X" : "O"}
        </div>
      </div>
    );
  };
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.status}>
          Status: {winner ? winner : "playing"}
        </div>
        <div className={styles.flexContainer}>
          <div className={styles["mx-5"]}>X wins: {xWins}</div>
          <div className={styles["mx-5"]}>O wins: {oWins}</div>
          <div className={styles["mx-5"]}>Draw: {draw}</div>
          <div className={styles.flexContainer}>
            {squares.map((square, index) => (
              <Square
                key={index}
                value={square}
                iTh={index}
                onEntry={onEntry}
              />
            ))}
          </div>

          <button onClick={rematch} className={styles?.rematch}>
            Rematch
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;

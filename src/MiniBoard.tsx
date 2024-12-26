import React, { useState } from "react";
import Board from "./Board";
import Square from "./Square";
import styles from "./style"; // ייבוא הסגנונות

const MiniBoard: React.FC = () => {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);

  const handleClick = (index: number) => {
    if (board[index]) return; // למנוע שינוי בתא שכבר נבחר
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  return (
    <Board
      items={board}
      renderItem={(value, index) => (
        <Square value={value} onClick={() => handleClick(index)} />
      )}
      style={styles.miniBoard} 
    />
  );
};

export default MiniBoard;

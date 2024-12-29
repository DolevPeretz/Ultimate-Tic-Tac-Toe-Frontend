import React from "react";
import Board from "./TemplateBoard";
import Square from "./Square";
import styles from "./style";

interface MiniBoardProps {
  board: string[];
  isXNext: boolean; 
  onUpdate: (newBoard: string[]) => void;
}

const MiniBoard: React.FC<MiniBoardProps> = ({ board, isXNext, onUpdate }) => {
  const handleClick = (index: number) => {
    if (board[index]) return; 
    const updatedBoard = [...board];
    updatedBoard[index] = isXNext ? "X" : "O"; 
    onUpdate(updatedBoard); 
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

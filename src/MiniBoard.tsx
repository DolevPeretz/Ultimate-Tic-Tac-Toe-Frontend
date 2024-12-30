import React from "react";
import Board from "./TemplateBoard";
import Square from "./Square";
import { Player } from "./PlayerEnum";

interface MiniBoardProps {
  board: (Player | null)[]; 
  currentPlayer: Player;
  onUpdate: (newBoard: (Player | null)[]) => void; 
}

const MiniBoard: React.FC<MiniBoardProps> = ({
  board,
  currentPlayer,
  onUpdate,
}) => {
  const handleClick = (index: number) => {
    if (board[index]) return;
    const updatedBoard = [...board];
    updatedBoard[index] = currentPlayer; 
    onUpdate(updatedBoard); 
  };

  return (
    <Board
      items={board}
      className="MiniBoard"
      renderItem={(value, index) => (
        <Square value={value} onClick={() => handleClick(index)} />
      )}
    />
  );
};

export default MiniBoard;

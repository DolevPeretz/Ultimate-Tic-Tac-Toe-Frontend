import React, { useEffect, useState } from "react";
import Square from "./Square";
import { Player } from "./PlayerEnum";
import Board, { checkWinner } from "./TemplateBoard"; 
import { MiniBoardContainer, WinnerPlayer } from "./style";

interface MiniBoardProps {
  board: (Player | null)[];
  currentPlayer: Player;
  onUpdate: (newBoard: (Player | null)[]) => void;
  isReset: boolean;
}

const MiniBoard: React.FC<MiniBoardProps> = ({
  board,
  currentPlayer,
  onUpdate,
  isReset,
}) => {
  const [winner, setWinner] = useState<Player | null>(null);

  useEffect(() => {
    if (isReset) {
      setWinner(null); 
    } else {
      const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      const calculatedWinner = checkWinner(board, winningCombinations);
      if (calculatedWinner) {
        setWinner(calculatedWinner as Player);
      }
    }
  }, [board, isReset]);

  const handleClick = (index: number) => {
    if (board[index] || winner) return; 
    const updatedBoard = [...board];
    updatedBoard[index] = currentPlayer;
    onUpdate(updatedBoard);
  };

  return (
    <MiniBoardContainer winner={winner}>
      <Board
        items={board}
        className="MiniBoard"
        renderItem={(value, index) => (
          <Square value={value} onClick={() => handleClick(index)} />
        )}
      />
      {winner && <WinnerPlayer>Winner: {winner}</WinnerPlayer>}
    </MiniBoardContainer>
  );
};

export default MiniBoard;

import React, { useEffect, useState } from "react";
import Board from "./TemplateBoard";
import Square from "./Square";
import { Player } from "./PlayerEnum";

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

  const checkWinner = (board: (Player | null)[]): Player | null => {
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

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  };

  useEffect(() => {
    if (isReset) {
      setWinner(null); 
    } else {
      const calculatedWinner = checkWinner(board);
      if (calculatedWinner) {
        setWinner(calculatedWinner);
      }
    }
  }, [board, isReset]);

  const handleClick = (index: number) => {
    if (board[index]) return;
    const updatedBoard = [...board];
    updatedBoard[index] = currentPlayer;
    onUpdate(updatedBoard);
  };

  return (
    <div
      style={{
        backgroundColor:
          winner === Player.X
            ? "lightgreen"
            : winner === Player.O
            ? "red"
            : undefined,
        borderRadius: "12px",
        padding: "10px",
        transition: "rgba(195, 209, 252, 0.7)",
      }}
    >
      <Board
        items={board}
        className="MiniBoard"
        renderItem={(value, index) => (
          <Square value={value} onClick={() => handleClick(index)} />
        )}
      />
      {winner && <p style={{ fontWeight: "bold" }}>Winner: {winner}</p>}
    </div>
  );
};

export default MiniBoard;

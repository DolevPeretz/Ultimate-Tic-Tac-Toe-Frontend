import React, { useEffect, useState } from "react";
import Board from "./TemplateBoard";
import Square from "./Square";
import { Player } from "./PlayerEnum";

interface MiniBoardProps {
  board: (Player | null)[]; 
  currentPlayer: Player;
  onUpdate: (newBoard: (Player | null)[]) => void; 
  isActive: boolean; // האם הלוח פעיל
  isReset: boolean; // האם המשחק עבר איפוס
}

const MiniBoard: React.FC<MiniBoardProps> = ({
  board,
  currentPlayer,
  onUpdate,
  isActive,
  isReset,
}) => {
  const [winner, setWinner] = useState<Player | null>(null);

  const checkWinner = (board: (Player | null)[]): Player | null => {
    const winningCombinations = [
      [0, 1, 2], // שורה עליונה
      [3, 4, 5], // שורה אמצעית
      [6, 7, 8], // שורה תחתונה
      [0, 3, 6], // עמודה שמאלית
      [1, 4, 7], // עמודה אמצעית
      [2, 5, 8], // עמודה ימנית
      [0, 4, 8], // אלכסון שמאלי
      [2, 4, 6], // אלכסון ימני
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // מחזיר את השחקן המנצח
      }
    }

    return null; // אין מנצח
  };

  useEffect(() => {
    if (isReset) {
      setWinner(null); // איפוס המנצח אם המשחק עבר איפוס
    } else {
      const calculatedWinner = checkWinner(board);
      if (calculatedWinner) {
        setWinner(calculatedWinner); // עדכון המנצח
      }
    }
  }, [board, isReset]);

  const handleClick = (index: number) => {
    if (!isActive || board[index] || winner) return; // אם הלוח לא פעיל, התא תפוס או שיש מנצח
    const updatedBoard = [...board];
    updatedBoard[index] = currentPlayer; 
    onUpdate(updatedBoard); 
  };

  return (
    <div
      style={{
        backgroundColor: winner === Player.X ? "lightgreen" : winner === Player.O ? "yellow" : isActive ? "white" : "lightgray",
        borderRadius: "12px",
        padding: "10px",
        transition: "background-color 0.3s ease",
        opacity: isActive ? 1 : 0.5, // אם הלוח לא פעיל, האופסיטי יורד
        pointerEvents: isActive ? "auto" : "none", // אם הלוח לא פעיל, מניעת קליקים
      }}
    >
      <Board
        items={board}
        className="MiniBoard"
        renderItem={(value, index) => (
          <Square value={value} onClick={() => handleClick(index)} />
        )}
      />
      {winner && <p style={{ fontWeight: "bold" }}>Winner: {winner}</p>} {/* הצגת המנצח אם יש */}
    </div>
  );
};

export default MiniBoard;

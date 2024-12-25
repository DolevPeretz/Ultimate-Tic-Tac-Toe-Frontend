import React, { useState } from "react";
import Board from "./Board";
import Square from "./Square";

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
      style={{
        backgroundColor: "rgba(255, 192, 203, 0.8)", // ורוד בייבי שקוף ללוח הפנימי
        padding: "20px", // ריווח פנימי ללוח הפנימי
        height: "250px", // גובה גדול יותר ללוח הפנימי
        width: "300px", // רוחב גדול יותר ללוח הפנימי
        display: "grid", // שימוש ב-grid CSS
        gridTemplateColumns: "repeat(3, 1fr)", // 3 עמודות
        gap: "15px", // ריווח גדול יותר בין הקוביות הפנימיות
        borderRadius: "12px", // פינות מעוגלות ללוח הפנימי
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // צל עדין ללוח הפנימי
      }}
    />
  );
};

export default MiniBoard;

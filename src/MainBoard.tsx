import React from "react";
import Board from "./Board";
import MiniBoard from "./MiniBoard";

const MainBoard: React.FC = () => {
  const mainBoardItems = Array(9).fill(null); // הלוח הראשי עם 9 לוחות פנימיים

  return (
    <Board
      items={mainBoardItems}
      renderItem={(item, index) => <MiniBoard key={index} />}
      style={{
        backgroundColor: "#FFC0CB", // ורוד בייבי ללוח הראשי
        padding: "40px", // ריווח פנימי ללוח הראשי
        height: "auto", // גובה דינמי
        width: "90%", // הרחבת רוחב הלוח הראשי
        display: "grid", // שימוש ב-grid CSS
        gridTemplateColumns: "repeat(3, 1fr)", // 3 עמודות
        gap: "40px", // ריווח גדול יותר בין הלוחות הפנימיים
        justifyContent: "center", // מיקום במרכז האופקי
        alignItems: "center", // מיקום במרכז האנכי
        borderRadius: "16px", // פינות מעוגלות ללוח הראשי
        boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)", // צל מודגש ללוח הראשי
      }}
    />
  );
};

export default MainBoard;

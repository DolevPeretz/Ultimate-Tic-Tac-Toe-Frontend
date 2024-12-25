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
        // backgroundColor: "#D8BEBE", // ורוד עם גוון אפור
        padding: "20px", // ריווח פנימי ללוח הראשי
        width: "1000px", // רוחב קבוע ללוח הראשי
        height: "1000px", // גובה קבוע ללוח הראשי
        display: "grid", // שימוש ב-grid CSS
        gridTemplateColumns: "repeat(3, 1fr)", // 3 עמודות
        gap: "8px", // ריווח קטן יותר בין הלוחות הפנימיים
        justifyContent: "center", // מיקום במרכז האופקי
        alignItems: "center", // מיקום במרכז האנכי
        borderRadius: "8px", // פינות מעוגלות ללוח הראשי
        // boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)", // צל ללוח הראשי
      }}
    />
  );
};

export default MainBoard;

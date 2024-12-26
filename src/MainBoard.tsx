import React from "react";
import Board from "./Board";
import MiniBoard from "./MiniBoard";
import styles from "./style"; // ייבוא הסגנונות

const MainBoard: React.FC = () => {
  const mainBoardItems = Array(9).fill(null); // הלוח הראשי עם 9 לוחות פנימיים

  return (
    <Board
      items={mainBoardItems}
      renderItem={(item, index) => <MiniBoard key={index} />}
      style={styles.mainBoard} // שימוש בסגנונות מ-styles.ts
    />
  );
};

export default MainBoard;

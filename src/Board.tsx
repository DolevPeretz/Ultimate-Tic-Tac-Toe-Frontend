import React from "react";
import Grid from "@mui/material/Grid";
import styles from "./style"; // ייבוא הסגנונות

interface BoardProps {
  items: any[]; // מערך התאים בלוח
  renderItem: (item: any, index: number) => React.ReactNode; // פונקציה ליצירת תוכן לכל תא
  style?: React.CSSProperties; // עיצוב מותאם אישית (אופציונלי)
}

const Board: React.FC<BoardProps> = ({ items, renderItem, style }) => {
  return (
    <Grid
      container
      spacing={1}
      sx={{
        ...styles.board, 
        ...style, 
      }}
    >
      {items.map((item, index) => (
        <Grid item xs={4} key={index}>
          {renderItem(item, index)}
        </Grid>
      ))}
    </Grid>
  );
};

export default Board;

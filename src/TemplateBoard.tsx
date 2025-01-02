import React from "react";
import Grid from "@mui/material/Grid";

export const checkWinner = (board: any[], winningCombinations: number[][]): any | null => {
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null; 
};

interface BoardProps {
  items: any[];
  renderItem: (item: any, index: number) => React.ReactNode;
  className?: string;
}

const Board: React.FC<BoardProps> = ({ items, renderItem, className }) => {
  return (
    <Grid container className={className} spacing={1}>
      {items.map((item, index) => (
        <Grid item xs={4} key={index}>
          {renderItem(item, index)}
        </Grid>
      ))}
    </Grid>
  );
};

export default Board;

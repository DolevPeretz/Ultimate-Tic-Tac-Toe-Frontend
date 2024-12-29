import React, { useState } from "react";
import { ThemeProvider, CssBaseline, Box, Typography, Button } from "@mui/material";
import MainBoard from "./MainBoard";
import theme from "./theme";
import styles from "./style";

const App: React.FC = () => {
  const [mainBoard, setMainBoard] = useState<string[][]>(Array(9).fill(Array(9).fill(null))); 
  const [isXNext, setIsXNext] = useState(true); 

  const handleMove = (miniBoardIndex: number, newMiniBoard: string[]) => {
    const updatedMainBoard = [...mainBoard];
    updatedMainBoard[miniBoardIndex] = newMiniBoard;
    setMainBoard(updatedMainBoard);
    setIsXNext(!isXNext); 
  };

  const resetGame = () => {
    setMainBoard(Array(9).fill(Array(9).fill(null))); 
    setIsXNext(true); 
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={styles.appContainer}>
        <Box sx={styles.headerContainer}>
          <Typography variant="h4" sx={styles.title}>
            XO² Game
          </Typography>
          <Button variant="contained" color="primary" onClick={resetGame}>
            Reset Game
          </Button>
        </Box>
        <MainBoard
          mainBoard={mainBoard}
          isXNext={isXNext}
          onMove={handleMove}
        />
      </Box>
    </ThemeProvider>
  );
};

export default App;

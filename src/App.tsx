import React, { useState } from "react";
import { ThemeProvider, CssBaseline, Typography } from "@mui/material";
import MainBoard from "./MainBoard";
import theme from "./theme";
import { Player } from "./PlayerEnum";
import {
  AppContainer,
  HeaderContainer,
  Title,
  ResetButton,
} from "./style";

const App: React.FC = () => {
  const [mainBoard, setMainBoard] = useState<(Player | null)[][]>(
    Array(9).fill(Array(9).fill(null))
  );
  const [currentPlayer, setCurrentPlayer] = useState<Player>(Player.X);
  const [activeBoardIndex, setActiveBoardIndex] = useState<number | null>(null);
  const [isReset, setIsReset] = useState(false); // מצב חדש - האם המשחק עבר איפוס

  const handleMove = (
    miniBoardIndex: number,
    newMiniBoard: (Player | null)[]
  ) => {
    const updatedMainBoard = [...mainBoard];
    updatedMainBoard[miniBoardIndex] = newMiniBoard;

    // עדכון המצב של הלוח
    setMainBoard(updatedMainBoard);

    // החלפת השחקן
    setCurrentPlayer((prevPlayer) =>
      prevPlayer === Player.X ? Player.O : Player.X
    );

    // זיהוי אם המשחק בלוח הנוכחי הסתיים
    const isBoardFull = newMiniBoard.every((cell) => cell !== null);
    if (isBoardFull) {
      setActiveBoardIndex(null); // אפשר לבחור לוח חדש
    } else {
      setActiveBoardIndex(miniBoardIndex); // המשך לשחק בלוח הנוכחי
    }

    setIsReset(false); // מבטלים את מצב האיפוס
  };

  const resetGame = () => {
    setMainBoard(Array(9).fill(Array(9).fill(null))); // איפוס הלוח הראשי
    setCurrentPlayer(Player.X); // אתחול לשחקן הראשון
    setActiveBoardIndex(null); // איפוס הלוח הפעיל
    setIsReset(true); // מציין שהמשחק עבר איפוס
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContainer>
        <HeaderContainer>
          <Title variant="h3">XO² Game</Title>
          <ResetButton variant="contained" onClick={resetGame}>
            Reset Game
          </ResetButton>
        </HeaderContainer>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          The Current Player is: {currentPlayer}
        </Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: 4 }}>
          Next Turn: {currentPlayer === Player.X ? Player.O : Player.X}
        </Typography>
        <MainBoard
          mainBoard={mainBoard}
          currentPlayer={currentPlayer}
          onMove={handleMove}
          activeBoardIndex={activeBoardIndex}
          setActiveBoardIndex={setActiveBoardIndex}
          isReset={isReset} // העברת isReset ל-MainBoard
        />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;

import React, { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
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
  const [isReset, setIsReset] = useState(false); // האם המשחק באיפוס

  const handleMove = (
    miniBoardIndex: number,
    newMiniBoard: (Player | null)[]
  ) => {
    const updatedMainBoard = [...mainBoard];
    updatedMainBoard[miniBoardIndex] = newMiniBoard;

    setMainBoard(updatedMainBoard);

    // עדכון השחקן הנוכחי
    setCurrentPlayer((prevPlayer) =>
      prevPlayer === Player.X ? Player.O : Player.X
    );
  };

  const resetGame = () => {
    setMainBoard(Array(9).fill(Array(9).fill(null))); // איפוס הלוח הראשי
    setCurrentPlayer(Player.X); // איפוס השחקן
    setIsReset(true); // להפעיל את מצב האיפוס
    setTimeout(() => setIsReset(false), 100); // להסיר את האיפוס לאחר זמן קצר
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

        {/* הצגת השחקן הנוכחי */}
        <p style={{ fontSize: "1.2rem", fontWeight: "bold", margin: "10px 0" }}>
          The Current Player is: {currentPlayer}
        </p>

        <MainBoard
          mainBoard={mainBoard}
          currentPlayer={currentPlayer}
          onMove={handleMove}
          isReset={isReset} // העברת מידע על מצב האיפוס
        />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;

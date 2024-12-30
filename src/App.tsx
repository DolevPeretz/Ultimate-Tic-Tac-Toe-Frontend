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

  const handleMove = (miniBoardIndex: number, newMiniBoard: (Player | null)[]) => {
    const updatedMainBoard = [...mainBoard];
    updatedMainBoard[miniBoardIndex] = newMiniBoard;
    setMainBoard(updatedMainBoard);
    setCurrentPlayer(currentPlayer === Player.X ? Player.O : Player.X);
  };

  const resetGame = () => {
    setMainBoard(Array(9).fill(Array(9).fill(null)));
    setCurrentPlayer(Player.X);
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
        <MainBoard
          mainBoard={mainBoard}
          currentPlayer={currentPlayer}
          onMove={handleMove}
        />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;

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
  TitleCurrentPlayer,
} from "./style";

const App: React.FC = () => {
  const [mainBoard, setMainBoard] = useState<(Player | null)[][]>(
    Array(9).fill(Array(9).fill(null))
  );
  const [currentPlayer, setCurrentPlayer] = useState<Player>(Player.X);
  const [isReset, setIsReset] = useState(false);

  const handleMove = (
    miniBoardIndex: number,
    newMiniBoard: (Player | null)[]
  ) => {
    const updatedMainBoard = [...mainBoard];
    updatedMainBoard[miniBoardIndex] = newMiniBoard;

    setMainBoard(updatedMainBoard);

    setCurrentPlayer((prevPlayer) =>
      prevPlayer === Player.X ? Player.O : Player.X
    );
  };

  const resetGame = () => {
    setMainBoard(Array(9).fill(Array(9).fill(null))); 
    setCurrentPlayer(Player.X); 
    setIsReset(true); 
    setTimeout(() => setIsReset(false), 100); 
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContainer>
        <HeaderContainer>
          <Title>Ultimate-Tic-Tac-Toe</Title>
          <ResetButton onClick={resetGame}>
            Reset Game
          </ResetButton>
        </HeaderContainer>

        <TitleCurrentPlayer>
          The Current Player is: {currentPlayer}
        </TitleCurrentPlayer>

        <MainBoard
          mainBoard={mainBoard}
          currentPlayer={currentPlayer}
          onMove={handleMove}
          isReset={isReset} 
          onReset={resetGame} 
        />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;

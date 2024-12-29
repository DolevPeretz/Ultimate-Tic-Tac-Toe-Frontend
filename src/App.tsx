import React, { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import MainBoard from "./MainBoard";
import theme from "./theme";
import {
  AppContainer,
  HeaderContainer,
  Title,
  ResetButton,
  MainBoardContainer,
} from "./style";

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
      <AppContainer>
        <HeaderContainer>
          <Title variant="h3">XO² Game</Title>
          <ResetButton variant="contained" onClick={resetGame}>
            Reset Game
          </ResetButton>
        </HeaderContainer>
        <MainBoard
          mainBoard={mainBoard}
          isXNext={isXNext}
          onMove={handleMove}
        />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;

import React, { useEffect } from "react";
import MiniBoard from "./MiniBoard";
import { Player } from "./PlayerEnum";
import { MainBoardContainer } from "./style";

interface MainBoardProps {
  mainBoard: (Player | null)[][];
  currentPlayer: Player;
  onMove: (miniBoardIndex: number, newMiniBoard: (Player | null)[]) => void;
  isReset: boolean;
  onReset: () => void; 
}

const getMiniBoardWinner = (miniBoard: (Player | null)[]): Player | null => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (miniBoard[a] && miniBoard[a] === miniBoard[b] && miniBoard[a] === miniBoard[c]) {
      return miniBoard[a];
    }
  }
  return null;
};

const checkMainBoardWinner = (mainBoard: (Player | null)[][]): Player | null => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;

    const miniBoardWinners = [
      getMiniBoardWinner(mainBoard[a]),
      getMiniBoardWinner(mainBoard[b]),
      getMiniBoardWinner(mainBoard[c]),
    ];

    if (
      miniBoardWinners[0] &&
      miniBoardWinners[0] === miniBoardWinners[1] &&
      miniBoardWinners[0] === miniBoardWinners[2]
    ) {
      return miniBoardWinners[0];
    }
  }

  return null;
};

const MainBoard: React.FC<MainBoardProps> = ({
  mainBoard,
  currentPlayer,
  onMove,
  isReset,
  onReset,
}) => {
  useEffect(() => {
    const winner = checkMainBoardWinner(mainBoard);
    if (winner) {
      alert(`Player ${winner} has won the game!`);
      onReset(); 
    }
  }, [mainBoard, onReset]);

  return (
    <MainBoardContainer>
      {mainBoard.map((miniBoard, index) => (
        <MiniBoard
          key={index}
          board={miniBoard}
          currentPlayer={currentPlayer}
          onUpdate={(newMiniBoard) => onMove(index, newMiniBoard)}
          isReset={isReset}
        />
      ))}
    </MainBoardContainer>
  );
};

export default MainBoard;

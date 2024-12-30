import React from "react";
import MiniBoard from "./MiniBoard";
import { Player } from "./PlayerEnum";
import { MainBoardContainer } from "./style";

interface MainBoardProps {
  mainBoard: (Player | null)[][]; 
  currentPlayer: Player; 
  onMove: (miniBoardIndex: number, newMiniBoard: (Player | null)[]) => void;
  activeBoardIndex: number | null; // לוח פעיל
  setActiveBoardIndex: React.Dispatch<React.SetStateAction<number | null>>; // פונקציה לעדכון לוח פעיל
  isReset: boolean; // האם המשחק עבר איפוס
}

const MainBoard: React.FC<MainBoardProps> = ({
  mainBoard,
  currentPlayer,
  onMove,
  activeBoardIndex,
  setActiveBoardIndex,
  isReset,
}) => {
  const handleMiniBoardUpdate = (
    miniBoardIndex: number,
    newMiniBoard: (Player | null)[]
  ) => {
    // עדכון הלוח בלוח הראשי
    onMove(miniBoardIndex, newMiniBoard);

    // זיהוי אם יש מנצח בלוח או תיקו
    const checkWinner = (board: (Player | null)[]): Player | null => {
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
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          return board[a];
        }
      }

      return null;
    };

    const winner = checkWinner(newMiniBoard);
    const isBoardFull = newMiniBoard.every((cell) => cell !== null);

    if (winner || isBoardFull) {
      // אם יש מנצח או תיקו, אפשור בחירת לוח חדש
      setActiveBoardIndex(null);
    } else {
      // המשך לשחק בלוח הנוכחי אם המשחק לא הסתיים
      setActiveBoardIndex(miniBoardIndex);
    }
  };

  return (
    <MainBoardContainer>
      {mainBoard.map((miniBoard, index) => (
        <MiniBoard
          key={index}
          board={miniBoard}
          currentPlayer={currentPlayer}
          onUpdate={(newMiniBoard) => handleMiniBoardUpdate(index, newMiniBoard)}
          isActive={activeBoardIndex === null || activeBoardIndex === index} // רק הלוח הפעיל ניתן ללחיצה
          isReset={isReset} // העברת המידע אם המשחק עבר איפוס
        />
      ))}
    </MainBoardContainer>
  );
};

export default MainBoard;

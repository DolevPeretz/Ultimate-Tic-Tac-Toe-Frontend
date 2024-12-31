import React from "react";
import MiniBoard from "./MiniBoard";
import { Player } from "./PlayerEnum";
import { MainBoardContainer } from "./style";

interface MainBoardProps {
  mainBoard: (Player | null)[][]; 
  currentPlayer: Player; 
  onMove: (miniBoardIndex: number, newMiniBoard: (Player | null)[]) => void;
  isReset: boolean; // האם המשחק באיפוס
}

const MainBoard: React.FC<MainBoardProps> = ({
  mainBoard,
  currentPlayer,
  onMove,
  isReset,
}) => {
  return (
    <MainBoardContainer>
      {mainBoard.map((miniBoard, index) => (
        <MiniBoard
          key={index}
          board={miniBoard}
          currentPlayer={currentPlayer}
          onUpdate={(newMiniBoard) => onMove(index, newMiniBoard)}
          isReset={isReset} // העברת מידע על מצב האיפוס
        />
      ))}
    </MainBoardContainer>
  );
};

export default MainBoard;

import React from "react";
import MiniBoard from "./MiniBoard";
import { Player } from "./PlayerEnum";
import { MainBoardContainer } from "./style";

interface MainBoardProps {
  mainBoard: (Player | null)[][]; 
  currentPlayer: Player; 
  onMove: (miniBoardIndex: number, newMiniBoard: (Player | null)[]) => void;
}

const MainBoard: React.FC<MainBoardProps> = ({
  mainBoard,
  currentPlayer,
  onMove,
}) => {
  return (
    <MainBoardContainer>
      {mainBoard.map((miniBoard, index) => (
        <MiniBoard
          key={index}
          board={miniBoard}
          currentPlayer={currentPlayer}
          onUpdate={(newMiniBoard) => onMove(index, newMiniBoard)}
        />
      ))}
    </MainBoardContainer>
  );
};

export default MainBoard;

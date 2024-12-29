import React from "react";
import Board from "./TemplateBoard";
import MiniBoard from "./MiniBoard";
import styles from "./style";

interface MainBoardProps {
  mainBoard: string[][];
  isXNext: boolean;
  onMove: (miniBoardIndex: number, newMiniBoard: string[]) => void;
}

const MainBoard: React.FC<MainBoardProps> = ({ mainBoard, isXNext, onMove }) => {
  return (
    <Board
      items={mainBoard}
      renderItem={(miniBoard, index) => (
        <MiniBoard
          key={index}
          board={miniBoard}
          isXNext={isXNext}
          onUpdate={(newMiniBoard) => onMove(index, newMiniBoard)}
        />
      )}
      style={styles.mainBoard}
    />
  );
};

export default MainBoard;

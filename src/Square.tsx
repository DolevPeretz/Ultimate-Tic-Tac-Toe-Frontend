import React from "react";
import Button from "@mui/material/Button";
import { squareButtonStyle } from "./style";
import { Player } from "./PlayerEnum";

interface SquareProps {
  value: Player | null;
  onClick: () => void;
}


const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <Button  sx={squareButtonStyle}  onClick={onClick}>
      {value}
    </Button>
  );
};

export default Square;



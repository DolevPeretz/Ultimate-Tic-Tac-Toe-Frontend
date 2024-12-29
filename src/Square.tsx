import React from "react";
import Button from "@mui/material/Button";
import { squareButtonStyle } from "./style";

const Square: React.FC<{ value: string | null; onClick: () => void }> = ({
  value,
  onClick,
}) => {
  return (
    <Button sx={squareButtonStyle} onClick={onClick}>
      {value}
    </Button>
  );
};

export default Square;

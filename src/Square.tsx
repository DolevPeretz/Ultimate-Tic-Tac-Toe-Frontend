import React from "react";
import Button from "@mui/material/Button";
import styles from "./style"; 

interface SquareProps {
  value: string | null;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <Button variant="outlined" onClick={onClick} sx={styles.squareButton}>
      {value}
    </Button>
  );
};

export default Square;

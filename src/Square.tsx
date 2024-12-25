import React from "react";
import Button from "@mui/material/Button";

interface SquareProps {
  value: string | null;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      sx={{
        width: 50,
        height: 50,
        fontSize: "1.5rem",
        backgroundColor: "#f0f0f0", // רקע לתאים
        borderRadius: 1, // פינות קטנות מעוגלות
        border: "1px solid #ccc", // גבול עדין
      }}
    >
      {value}
    </Button>
  );
};

export default Square;

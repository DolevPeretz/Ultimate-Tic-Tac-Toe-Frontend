import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import MainBoard from "./MainBoard"; // ייבוא הלוח הראשי
import { Box, Typography, Button } from "@mui/material";
import theme from "./theme"; // ייבוא ערכת הנושא

const App: React.FC = () => {
  const resetGame = () => {
    window.location.reload(); // איפוס המשחק
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 2,
          backgroundColor: "background.default", // ורוד בייבי מתוך ערכת הנושא
        }}
      >
        <Typography variant="h4" gutterBottom>
          XO² Game
        </Typography>
        <MainBoard /> {/* הלוח הראשי */}
        <Box mt={4}>
          <Button variant="contained" color="primary" onClick={resetGame}>
            Reset Game
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;

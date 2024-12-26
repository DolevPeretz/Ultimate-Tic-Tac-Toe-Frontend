import React from "react";
import { ThemeProvider, CssBaseline, Box, Typography, Button } from "@mui/material";
import MainBoard from "./MainBoard"; // ייבוא הלוח הראשי
import theme from "./theme"; // ייבוא ערכת הנושא
import styles from "./style"; // ייבוא הסגנונות

const App: React.FC = () => {
  const resetGame = () => {
    window.location.reload(); // איפוס המשחק
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={styles.appContainer}>
        {/* כותרת המשחק עם הכפתור */}
        <Box sx={styles.headerContainer}>
          <Typography variant="h4" sx={styles.title}>
            XO² Game
          </Typography>
          <Button variant="contained" color="primary" onClick={resetGame}>
            Reset Game
          </Button>
        </Box>
        <MainBoard /> {/* הלוח הראשי */}
      </Box>
    </ThemeProvider>
  );
};

export default App;

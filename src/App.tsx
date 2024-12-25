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
        {/* כותרת המשחק עם הכפתור */}
        <Box
          sx={{
            display: "flex", // סידור שורה
            alignItems: "center", // יישור אנכי
            justifyContent: "space-between", // מרווח בין הכותרת לכפתור
            width: "100%", // שימוש ברוחב מלא
            maxWidth: "1000px", // הגבלת הרוחב המרבי
            paddingX: 2, // ריווח אופקי
            marginBottom: 4, // מרווח מתחת לכותרת
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#FFFFFF", // צבע לבן
              textAlign: "center",
              fontWeight: "bold", // משקל גופן מודגש
            }}
          >
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

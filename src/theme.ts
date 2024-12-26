import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "rgba(123, 155, 250, 0.7)",  // ורוד בייבי לכל הרקע הראשי
    },
    primary: {
      main: "#1976d2", // כחול לכפתורים ראשיים
    },
    secondary: {
      main: "#dc004e", // אדום לכפתורים משניים
    },
  },
  shape: {
    borderRadius: 8, // פינות מעוגלות
  },
});

export default theme;

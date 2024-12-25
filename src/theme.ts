import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#FFC0CB", // ורוד בייבי לכל הרקע הראשי
      paper: "rgba(255, 192, 203, 0.7)", // ורוד בייבי שקוף ללוחות הפנימיים
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

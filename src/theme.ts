import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "rgba(123, 155, 250, 0.7)",  
    },
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e", 
    },
  },
  shape: {
    borderRadius: 8, 
  },
});

export default theme;

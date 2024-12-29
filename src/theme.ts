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
  components: {
    MuiGrid: {
      styleOverrides: {
        container: {
          "&.MainBoard": {
            padding: "20px",
            width: "1000px",
            height: "1000px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "8px",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "8px",
            backgroundColor: "rgba(195, 209, 252, 0.7)",
          },
          "&.MiniBoard": {
            padding: "20px",
            width: "300px",
            height: "250px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "15px",
            borderRadius: "12px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            backgroundColor: "#rgba(123, 155, 250, 0.7)",
          },
        },
      },
    },
  },
  
});

export default theme;

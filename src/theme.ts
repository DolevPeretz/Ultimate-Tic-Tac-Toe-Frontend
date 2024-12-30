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
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "15px",
            padding: "20px",
            backgroundColor: "rgba(123, 155, 250, 0.7)",
            borderRadius: 8,
            width: "1000px",
            height: "1000px",
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

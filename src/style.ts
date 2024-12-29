import { styled } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";
import { SxProps } from "@mui/system";


export const squareButtonStyle: SxProps = {
  width: 50,
  height: 50,
  fontSize: "1.5rem",
  backgroundColor: "rgba(123, 155, 250, 0.7)",
  borderRadius: 2,
  border: "1px solid #ccc",
  "&:hover": {
    backgroundColor: "#e0e0e0",
  },
};

export const AppContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
}));

export const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  maxWidth: "1000px",
  padding: theme.spacing(2),
  marginBottom: theme.spacing(4),
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: "#FFFFFF",
  textAlign: "center",
  fontWeight: "bold",
}));

export const ResetButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  ":hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export const MainBoardContainer = styled(Box)(({ theme }) => ({
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
}));

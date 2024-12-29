const styles = {
  appContainer: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
    backgroundColor: "background.default", 
  },
  headerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between", 
    width: "100%", 
    maxWidth: "1000px",
    paddingX: 2, 
    marginBottom: 4, 
  },
  title: {
    color: "#FFFFFF", 
    textAlign: "center",
    fontWeight: "bold", 
  },
  mainBoard: {
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
  miniBoard: {
    backgroundColor: "background.default", 
    padding: "20px",
    height: "250px",
    width: "300px",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "15px",
    borderRadius: "12px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  },
  board: {
    padding: 2,
    borderRadius: 4,
  },
  squareButton: {
    width: 50,
    height: 50,
    fontSize: "1.5rem",
    backgroundColor: "#f0f0f0",
    borderRadius: 1, 
    border: "1px solid #ccc", 
  },
};

export default styles;

const styles = {
  appContainer: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
    backgroundColor: "background.default", // ורוד בייבי מתוך ערכת הנושא
  },
  headerContainer: {
    display: "flex",
    alignItems: "center", // יישור אנכי
    justifyContent: "space-between", // מרווח בין הכותרת לכפתור
    width: "100%", // שימוש ברוחב מלא
    maxWidth: "1000px", // הגבלת הרוחב המרבי
    paddingX: 2, // ריווח אופקי
    marginBottom: 4, // מרווח מתחת לכותרת
  },
  title: {
    color: "#FFFFFF", // צבע לבן
    textAlign: "center",
    fontWeight: "bold", // משקל גופן מודגש
  },
  mainBoard: {
    padding: "20px", // ריווח פנימי ללוח הראשי
    width: "1000px", // רוחב קבוע ללוח הראשי
    height: "1000px", // גובה קבוע ללוח הראשי
    display: "grid", // שימוש ב-grid CSS
    gridTemplateColumns: "repeat(3, 1fr)", // 3 עמודות
    gap: "8px", // ריווח קטן יותר בין הלוחות הפנימיים
    justifyContent: "center", // מיקום במרכז האופקי
    alignItems: "center", // מיקום במרכז האנכי
    borderRadius: "8px", // פינות מעוגלות ללוח הראשי
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
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // צל עדין
  },
  board: {
    padding: 2,
    borderRadius: 4,
  },
  squareButton: {
    width: 50,
    height: 50,
    fontSize: "1.5rem",
    backgroundColor: "#f0f0f0", // רקע לתאים
    borderRadius: 1, // פינות קטנות מעוגלות
    border: "1px solid #ccc", // גבול עדין
  },
};

export default styles;

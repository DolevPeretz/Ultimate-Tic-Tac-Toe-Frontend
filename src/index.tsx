import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// יצירת root עבור הרינדור
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

// רינדור הקומפוננטה הראשית
root.render(<App />);

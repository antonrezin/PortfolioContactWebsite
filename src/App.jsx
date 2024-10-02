// src/App.jsx
import { ThemeProvider } from "@mui/material/styles";
import Home from "./components/Home/Home";
import theme from "./themes/theme";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="animated-gradient"></div>
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;

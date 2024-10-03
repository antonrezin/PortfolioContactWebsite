import { ThemeProvider } from "@mui/material";
import "./App.css";
import Home from "./components/Home";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="animated-gradient">
          <Home />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

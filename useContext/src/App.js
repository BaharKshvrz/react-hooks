import "./App.css";
import { ThemeProvider } from "./components/ThemeContext";
import FunctionComponetContext from "./components/FunctionComponetContext";

function App() {
  return (
    <div className="App">
       <ThemeProvider>
          <FunctionComponetContext/>
        </ThemeProvider>
    </div>
  );
}

export default App;

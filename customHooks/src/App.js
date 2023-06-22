import "./App.css";
import InputElement from "./components/1.useLocalStorage/InputElement";
import ToggleComponent from "./components/3.useToggle/ToggleComponent";
import TimeoutComponent from "./components/4.useTimeout/TimeoutComponent";
import DebounceComponent from "./components/5.useDebounce/DebounceComponent";

function App() {
  return (
    <div className="App">
        <InputElement/>
        <hr/>
        <ToggleComponent/>
        <hr/>
        <TimeoutComponent/>
        <hr/>
        <DebounceComponent/>
    </div>
  );
}

export default App;

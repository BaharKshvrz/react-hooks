import "./App.css";
import InputElement from "./components/1.useLocalStorage/InputElement";
import ToggleComponent from "./components/3.useToggle/ToggleComponent";
import TimeoutComponent from "./components/4.useTimeout/TimeoutComponent";

function App() {
  return (
    <div className="App">
        <InputElement/>
        <hr/>
        <ToggleComponent/>
        <hr/>
        <TimeoutComponent/>
    </div>
  );
}

export default App;

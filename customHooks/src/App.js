import "./App.css";
// import InputElement from "./components/1.useLocalStorage/InputElement";
// import ToggleComponent from "./components/3.useToggle/ToggleComponent";
// import TimeoutComponent from "./components/4.useTimeout/TimeoutComponent";
// import DebounceComponent from "./components/5.useDebounce/DebounceComponent";
// import UpdateEffectComponent from "./components/6.useUpdateEffect/UpdateEffectComponent";
// import ArrayComponent from "./components/7.useArray/ArrayComponent";
import PreviousComponent from "./components/8.usePrevious/PreviousComponent";
import StateWithHistoryComponent from "./components/9.UseStateWithHistory/StateWithHistoryComponent";

function App() {
  return (
    <div className="App">
        {/* <InputElement/>
        <hr/>
        <ToggleComponent/>
        <hr/>
        <TimeoutComponent/>
        <hr/>
        <DebounceComponent/>
        <hr/>
        <UpdateEffectComponent/>
        <hr/>
        <ArrayComponent/> */}
        <hr/>
        <PreviousComponent/>
        <hr/>
        <StateWithHistoryComponent/>
    </div>
  );
}

export default App;

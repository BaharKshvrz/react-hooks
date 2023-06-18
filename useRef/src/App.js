import "./App.css";
import FocusOnElement from "./components/FocusOnElement";
import KeepPreviousValue from "./components/KeepPreviousValue";
import TrackOfRendering from "./components/TrackOfRendering";

function App() {
  return (
    <div className="App">
       <h4>Count Render times:</h4>
       <TrackOfRendering/>
       <hr/>  
       <h4>Accessing DOM Elements:</h4>
       <FocusOnElement/>
       <br/>  
       <hr/>  
       <h4>Keep Previous Element:</h4>
       <KeepPreviousValue/>
    </div>
  );
}

export default App;

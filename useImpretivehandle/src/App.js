import Modal from "./2.Modal";
import "./App.css";
import ParentForwardRef from "./components/1.ParentForwardRef";

function App() {
  return (
    <div className="App">
       <ParentForwardRef/>
        <hr/>
       <Modal/>
    </div>
  );
}

export default App;

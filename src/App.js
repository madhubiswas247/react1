import logo from "./logo.svg";
import "./App.css";
import FunctionBased from "./components/FunctionBased";
import ClassBased from "./components/ClassBased";
import CreateElementDemo from "./components/CreateElementDemo";
import TemplateStructureDemo from "./components/TemplateStructureDemo";

function App() {
  return (
    <div className="App">
      <TemplateStructureDemo />
      {/* <FunctionBased/> */}
      {/* <ClassBased /> */}
      {/* <CreateElementDemo /> */}
    </div>
  );
}

export default App;

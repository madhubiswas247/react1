import logo from "./logo.svg";
import "./App.css";
import FunctionBased from "./components/FunctionBased";
import ClassBased from "./components/ClassBased";
import CreateElementDemo from "./components/CreateElementDemo";
import TemplateStructureDemo from "./components/TemplateStructureDemo";
import WithoutUseStateDemo from "./components/WithoutUseStateDemo";
import UseStateDemo from "./components/UseStateDemo";
import UseStateProblemDemo from "./components/UseStateProblem";

function App() {
  return (
    <div className="App">
      <UseStateProblemDemo />
      {/* <UseStateDemo /> */}
      {/* <WithoutUseStateDemo /> */}
      {/* <TemplateStructureDemo /> */}
      {/* <FunctionBased/> */}
      {/* <ClassBased /> */}
      {/* <CreateElementDemo /> */}
    </div>
  );
}

export default App;

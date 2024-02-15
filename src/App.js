import logo from "./logo.svg";
import "./App.css";
import FunctionBased from "./components/FunctionBased";
import ClassBased from "./components/ClassBased";
import CreateElementDemo from "./components/CreateElementDemo";
import TemplateStructureDemo from "./components/TemplateStructureDemo";
import WithoutUseStateDemo from "./components/WithoutUseStateDemo";
import UseStateDemo from "./components/UseStateDemo";
import UseStateProblemDemo from "./components/UseStateProblem";
import PropsParent from "./components/PropsParent";
import UseStateArray from "./components/UseStateArray";
import ConditionalDemo from "./components/ConditionalDemo";
import ModuleCSSDemo from "./components/ModuleCSSDemo";
import UseStateDemo1 from "./components/practice/UseStateDemo1";
import TaskList from "./components/simpleTask/TaskList";
import PropDrillingComp1 from "./components/PropDrillingComp1";
import TaskHome from "./components/simpleTask/TaskHome";
import UseRefHook from "./components/hooks/UseRefHook";
import UseRefHook1 from "./components/hooks/UseRefHook1";
import ShoppingMain from "./components/shoppingProj/ShoppingMain";
import UseEffectDemo from "./components/hooks/UseEffectDemo";

function App() {
  return (
    <div className="App">
      {/* <UseEffectDemo/> */}
      <ShoppingMain/>
      {/* <UseRefHook1/> */}
      {/* <UseRefHook/> */}
      {/* <PropDrillingComp1 /> */}
      {/* <TaskHome /> */}
      {/* <UseStateDemo1 /> */}
      {/* <ModuleCSSDemo/> */}
      {/* <ConditionalDemo/> */}
      {/* <UseStateArray /> */}
      {/* <PropsParent /> */}
      {/* <UseStateProblemDemo /> */}
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

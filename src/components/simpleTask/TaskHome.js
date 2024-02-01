import { useState } from "react";
import TaskList from "./TaskList";
import Header from "./Header";
import AddTask from "./AddTask";
import Footer from "./Footer";

function TaskHome() {
    const headerLink = "Home";
    let [tasks, setTasks] = useState([
    { id: 1, task: "Exercise", isComplete: true },
    { id: 2, task: "Painting", isComplete: true },
    { id: 3, task: "Walking", isComplete: false },
  ]);
    return (
        <>
        <Header headerMenu={headerLink} />
        <main className="main">
        <AddTask tasks={tasks} setTasks={setTasks}/>
        <TaskList tasks={tasks} setTasks={setTasks}/>
        </main>
        <Footer/>
        </>
    );
}

export default TaskHome;

import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
    const [tasks, setTasks] = useState([{
        id: 1, 
        title: "Study Programming",
        description: "Study Programming to become a full stack developer.",
        isCompleted: false,
    }, {
        id: 2, 
        title: "Workout",
        description: "Do some pushups and situps.",
        isCompleted: false,
    }, {
        id: 3, 
        title: "Read Books",
        description: "Read books to gain knowledge.",
        isCompleted: false,
    }]) 
    return (
        <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
            <div className="w-[500px] ">
                <h1 className="text-3xl text-slate-100 font-bold text-center">
                    Task Manager
                </h1>
                <AddTask />
                <Tasks tasks={tasks} setTasks={setTasks} />
            </div>
        </div>
    );
}

export default App;

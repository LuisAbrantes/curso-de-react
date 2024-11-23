import { useState } from 'react';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'Study Programming',
            description: 'Study Programming to become a full stack developer.',
            isCompleted: false
        },
        {
            id: 2,
            title: 'Workout',
            description: 'Do some pushups and situps.',
            isCompleted: false
        },
        {
            id: 3,
            title: 'Read Books',
            description: 'Read books to gain knowledge.',
            isCompleted: false
        }
    ]);

    function onTaskClick(taskId) {
        const newTasks = tasks.map(task => {
            //NEED TO UPDATE THE TASK
            if (task.id === taskId) {
                return { ...task, isCompleted: !task.isCompleted };
            }
            // DON'T NEED TO UPDATE THE TASK
            return task;
        });
        setTasks(newTasks);
    }

    function onDeleteTaskClick(taskId) {
        const newTasks = tasks.filter(task => task.id !== taskId);
        setTasks(newTasks);
    }

    return (
        <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
            <div className="w-[500px] space-y-4 ">
                <h1 className="text-3xl text-slate-100 font-bold text-center">
                    Task Manager
                </h1>
                <AddTask />
                <Tasks
                    tasks={tasks}
                    onTaskClick={onTaskClick}
                    onDeleteTaskClick={onDeleteTaskClick}
                />
            </div>
        </div>
    );
}

export default App;

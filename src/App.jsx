import { useEffect, useState } from 'react';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import { v4 } from 'uuid';
function App() {
    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem('tasks')) || []
    );

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        const fetchTasks = async () => {
            // CALL THE API
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/todos?_limit=10',
                {
                    method: 'GET'
                }
            );
            // GET THE DATA THAT THE API RETURNS
            const data = await response.json();

            // STORAGE/PERSIST THE DATA IN THE STATE
            setTasks(data);
        };
        // CAN CALL THE API TO GET TASKS UNCOMMENTING THE LINE BELOW
        // fetchTasks();
    }, []);

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

    function onAddTaskSubmit(title, description) {
        const newTask = {
            id: v4(),
            title, //Same than title: title
            description: description, //Same than "description"
            isCompleted: false
        };
        setTasks([...tasks, newTask]);
    }

    return (
        <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
            <div className="w-[500px] space-y-4 ">
                <h1 className="text-3xl text-slate-100 font-bold text-center">
                    Task Manager
                </h1>
                <AddTask onAddTaskSubmit={onAddTaskSubmit} />
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

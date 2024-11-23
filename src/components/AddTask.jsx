function AddTask() {
    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <input
                type="text"
                placeholder="Type the task title"
                className="border border-slate-300 outline-state-400 px-4 py-2 rounded-md"
            />
            <input
                type="text"
                placeholder="Type the task description"
                className="border border-slate-300 outline-state-400 px-4 py-2 rounded-md"
            />
            <button className="bg-slate-500 px-4 text-white py-2 rounded-md font-medium">
                Add
            </button>
        </div>
    );
}

export default AddTask;

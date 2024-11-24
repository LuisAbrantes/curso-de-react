import Input from './Input';
import React, { useState } from 'react';

function AddTask({ onAddTaskSubmit }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <Input
                type="text"
                placeholder="Type the task title"
                value={title}
                onChange={event => setTitle(event.target.value)}
            />
            <Input
                type="text"
                placeholder="Type the task description"
                value={description}
                onChange={event => setDescription(event.target.value)}
            />
            <button
                onClick={() => {
                    // Verfify if the title and description are not empty
                    if (!title.trim() || !description.trim()) {
                        return alert(
                            'Please fill in the title and description'
                        );
                    }
                    onAddTaskSubmit(title, description);
                    setTitle('');
                    setDescription('');
                }}
                className="bg-slate-500 px-4 text-white py-2 rounded-md font-medium"
            >
                Add
            </button>
        </div>
    );
}

export default AddTask;

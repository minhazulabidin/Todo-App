import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';
import { getDatabase, ref, set } from 'firebase/database';

const EditPage = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const db = getDatabase();

    const [task, setTask] = useState({
        name: '',
        error: ''
    });


    useEffect(() => {
        if (location.state) {
            setTask({ name: location?.state?.name });
        }
    }, [location.state]);

    const handleChange = (e) => {
        setTask({ ...task, name: e.target.value });
        setTask((prev) => ({
            ...prev,
            error: "",
        }));
    };

    const handleUpdate = () => {
        if (task.name) {
            const taskRef = ref(db, `TaskList/${id}`);
            set(taskRef, { name: task.name })
                .then(() => {
                    navigate('/');
                })
                .catch(err => console.log(err));
        } else {
            setTask((prev) => ({
                ...prev,
                error: 'Task Required',
            }));
        }
    };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
                <h2  className="text-grey-darkest mb-3">Edit Task</h2>
                <input
                    type="text"
                    className={`shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker ${task.error ? 'border-red-500' : 'border-black'}`}
                    value={task.name}
                    onChange={handleChange}
                />
                {task.error && <p className="text-red-600 mt-2">{task.error}</p>}
                <button
                    className="flex-no-shrink p-2 border-2 rounded text-teal-500 border-teal hover:bg-teal-200 mt-6 hover:text-black hover:border-teal-500"
                    onClick={handleUpdate}
                >
                    Update Task
                </button>
            </div>
        </div>
    );
};

export default EditPage;

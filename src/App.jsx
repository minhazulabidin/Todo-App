import React, { useEffect, useState } from 'react';
import { getDatabase, onValue, push, ref, set } from 'firebase/database';

const App = () => {
  const [message, setMessage] = useState({
    task: "",
    error: "",
  });
  const [todos, setTodos] = useState([]);
  const db = getDatabase();

  const handleInput = (e) => {
    setMessage((prev) => ({
      ...prev,
      task: e.target.value,
    }));
    setMessage((prev) => ({
      ...prev,
      error: "",
    }));
  };

  const handleSubmit = () => {
    if (message.task) {
      const newTask = { name: message.task };

      set(push(ref(db, 'TaskList/')), newTask)
        .then(() => {
          setMessage((prev) => ({
            ...prev,
            task: "",
          }));
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setMessage((prev) => ({
        ...prev,
        error: 'Task Required',
      }));
    }
  };

  useEffect(() => {
    const taskCountRef = ref(db, 'TaskList/');
    onValue(taskCountRef, (snapshot) => {
      const array = [];
      snapshot.forEach((item) => {
        array.push(item.val());
      });

      setTodos(array);
    });
  }, []);

  return (
    <div className="w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-grey-darkest">Todo List</h1>
          <div className="flex mt-4">
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker ${message.error ? 'border-red-500' : 'border-black'
                }`}
              placeholder="Add Todo"
              onChange={handleInput}
              value={message.task}
            />
            <button
              className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:bg-teal"
              onClick={handleSubmit}
            >
              Add
            </button>
          </div>
          {message.error && <p className="text-red-600 mt-2">{message.error}</p>}
        </div>
        <div className="h-[400px] overflow-y-scroll">
          {todos.map((todo, index) => (
            <div key={index} className="flex mb-4 items-center">
              <p className="w-full text-grey-darkest">{todo.name}</p>
              <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded text-green border-green hover:bg-green">
                Done
              </button>
              <button
                className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:bg-red"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

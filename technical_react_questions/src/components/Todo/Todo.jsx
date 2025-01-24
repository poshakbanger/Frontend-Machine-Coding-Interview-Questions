import React, { useState } from 'react'

const Todo = () => {
    const [tasks,setTasks] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const addTask = () => {
        if (inputValue.trim() !== "") {
            setTasks([...tasks, inputValue]);
            setInputValue("");
        }
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_,i) => i !== index); // filter out the task by index
        setTasks(updatedTasks);
    }

    // Handle Enter key for adding tasks
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    }
  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", textAlign: "center" }}>
        <h1>Todo List</h1>
        <div style={{ marginBottom: "10px" }}>
            <input 
              type="text"
              placeholder='Enter a task'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              style={{ padding: "8px", width: "80%" }} 
            />
            <button onClick={addTask} style={{ padding: "8px 12px", marginLeft: "5px" }}>
          Submit
        </button>
        </div>
        <ul style={{ listStyleType: "none", padding: 0 }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "8px",
              border: "1px solid #ddd",
              marginBottom: "5px",
              borderRadius: "4px",
            }}
          >
            <span>{task}</span>
            <button
              onClick={() => deleteTask(index)}
              style={{ background: "#f00", color: "#fff", border: "none", padding: "5px 10px", borderRadius: "4px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo
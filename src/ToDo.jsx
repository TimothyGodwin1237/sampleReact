import React, { useState } from "react";
import "./ToDo.css";

const ToDo = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addOrUpdateTask = () => {
    if (!task.trim()) return;

    if (editIndex !== null) {
      const updated = [...list];
      updated[editIndex] = task;
      setList(updated);
      setEditIndex(null);
    } else {
      setList([...list, task]);
    }

    setTask("");
  };

  const removeTask = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  const editTask = (index) => {
    setTask(list[index]);
    setEditIndex(index);
  };

  return (
    <div className="todo-container">
      <h3>Simple ToDo</h3>

      <div className="todo-input">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task..."
        />
        <button onClick={addOrUpdateTask}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <div>
              <button onClick={() => editTask(index)}>Edit</button>
              <button onClick={() => removeTask(index)}>X</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;

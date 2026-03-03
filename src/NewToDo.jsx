import React, { useState } from "react";

const NewToDo = () => {
  const [task, setTask] = useState("");
  const [taskLit, setTaskList] = useState(["Task 1", "Task 2", "Task 3"]);
  const [editIndex, setEditIndex] = useState(null);

  const [userInfo, setUserInfo] = useState({
    name: "",
    age: 0,
  });
  const [user, setUser] = useState([
    {
      name: "sriram",
      age: 10,
    },
    {
      name: "dinesh",
      age: 10,
    },
  ]);

  function handleTaskList() {
    if (editIndex === null) {
      const temp = [...taskLit, task];
      if (temp.length > 5) {
        temp.splice(0, 1);
        setTaskList(temp);
      } else {
        setTaskList((prev) => [...prev, task]);
      }
    } else if (editIndex !== null) {
      const temp = [...taskLit];
      temp[editIndex] = task;
      setTaskList(temp);
      setEditIndex(null);
    }

    setTask("");
  }

  const handleDelete = (index) => {
    const afterDelete = taskLit.filter((_, i) => i !== index);
    setTaskList(afterDelete);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    const temp = [...taskLit];
    setTask(temp[index]);
  };

  return (
    <div>
      <div>
        <input
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button onClick={() => handleTaskList()}>
          {editIndex === null ? "Add" : "Update"}
        </button>
      </div>
      <div>
        <ul>
          {taskLit.map((item, index) => (
            <li key={index}>
              <p>{item}</p>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <input />
      <button>Confrm Delete</button>
    </div>
  );
};

export default NewToDo;

import React, { useState } from "react";

const NewToDo = () => {
  const [task, setTask] = useState("");
  const [taskLit, setTaskList] = useState(["Task 1", "Task 2", "Task 3"]);

  function handleTaskList() {
    console.log("task : ", task);
    const temp = [...taskLit, task];
    if (temp.length > 5) {
      //   alert("Already 5 tasks added removing 1st task");
      temp.splice(0, 1);
      setTaskList(temp);
    } else {
      setTaskList((prev) => [...prev, task]);
    }

    setTask("");
  }

  return (
    <div>
      <div>
        <input
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button onClick={() => handleTaskList()}>Add</button>
      </div>
      <div>
        <ul>
          {taskLit.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NewToDo;

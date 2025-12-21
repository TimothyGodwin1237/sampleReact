import React, { useEffect, useState } from "react";
import axios from "axios";

const APIexample = () => {
  const [userId, setUserId] = useState("5");
  const [title, setTitle] = useState("ReactJS");
  const [toDoList, setTodoList] = useState([]);

  const handleFetchTodo = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
      .then((todoRes) => {
        console.log("res : ", todoRes);
        if (todoRes.status == 200) {
          setTodoList(todoRes.data);
        } else if (todoRes.status != 200) {
          setTodoList([]);
        }
      })
      .catch((err) => {
        console.log("Error : ", err);
      });
  };

  const handlePOSTTodo = () => {
    const payload = {
      title: title,
      userId: userId,
    };
    axios
      .post("https://jsonplaceholder.typicode.com/todos", payload)
      .then((res) => {
        console.log("SAVED : ", res);
      })
      .catch((err) => {
        console.log("ERROR : ", err);
      });
  };

  useEffect(() => {
    handleFetchTodo();
  }, []);

  return (
    <div>
      <p>APIexample</p>
      <input value={userId} onChange={(e) => setUserId(e.target.value)} />
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={() => handleFetchTodo()}>GET UserId</button>
      <button onClick={() => handlePOSTTodo()}>POST ToDo</button>

      {toDoList.map((item, index) => (
        <div>
          <p>{index + 1}.</p>
          <p>Title : {item.title}</p>
          <p>id : {item.id}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default APIexample;

//GET => fetching data from server
//POST => sending data to server
//PUT => updating data
//DELETE => deleting data

// https://jsonplaceholder.typicode.com/todos
// https://jsonplaceholder.typicode.com/todos/42
// https://jsonplaceholder.typicode.com/todos?userId=1
// https://jsonplaceholder.typicode.com/todos?userId=1&name=sriram&age=20
// {
//     name: "sriram",
//     age: 20,
//     city:'chennai'
// }

// Task

//1. PUT API = https://jsonplaceholder.typicode.com/todos/89
// payload
// {
//     "userId": 2,
//     "title": "Class Tutorial",
//     "completed": false,
//     "city": "Chennai"
// }

// 2. Render GET API response in Table Structure

// UpComing Class
// 1. promises
// 2. PUT and DELETE
// 3. dynamic rendering of images from API
// 4. GitHUb
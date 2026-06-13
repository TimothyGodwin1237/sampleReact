import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { prodId } = useParams();
  const [loginInfo, setLoginInfo] = useState({
    name: "",
    password: "",
  });

  const handleSubmitForm = () => {
    axios
      .post(`http://localhost:5000/login`, loginInfo)
      .then((response) => {
        console.log("loginInfo : ", response.data.token);
        sessionStorage.setItem("token", response.data.token);
        navigate("/prodListing");
      })
      .catch((err) => console.log("Error : ", err));
  };

  return (
    <div>
      <p>UserName</p>
      <input
        type="text"
        onChange={(e) => setLoginInfo({ ...loginInfo, name: e.target.value })}
      />
      <p>Password</p>
      <input
        typr="password"
        onChange={(e) =>
          setLoginInfo({ ...loginInfo, password: e.target.value })
        }
      />

      <button onClick={() => handleSubmitForm()}>Submit</button>
    </div>
  );
};

export default Login;

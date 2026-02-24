import { Route, Routes } from "react-router-dom";
import About from "./About";
import "./App.css";
import Contact from "./contact";
import Layout from "./Layout";
import Profile from "./Profile";
import APIexample from "./APIexample";
import RHFExample from "./RHFExample";
import UserForm from "./UserForm";
import ToDo from "./ToDo";
import NewToDo from "./NewToDo";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/userAbout" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/ApiExample" element={<APIexample />} />
        <Route path="/RHFExample" element={<RHFExample />} />
        <Route path="/userForm" element={<UserForm />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/newtodo" element={<NewToDo />} />
      </Route>
    </Routes>
  );
}

export default App;

//npm install react-hook-form zod @hookform/resolvers

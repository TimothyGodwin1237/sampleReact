import { Route, Routes } from "react-router-dom";
import About from "./About";
import "./App.css";
import Contact from "./contact";
import Layout from "./Layout";
import Profile from "./Profile";
import APIexample from "./APIexample";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/userAbout" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/ApiExample" element={<APIexample />} />
      </Route>
    </Routes>
  );
}

export default App;

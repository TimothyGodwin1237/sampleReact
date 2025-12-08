import { Route, Routes } from "react-router-dom";
import About from "./About";
import "./App.css";
import Contact from "./contact";
import Layout from "./Layout";
import Profile from "./Profile";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/userAbout" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile/:userId" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;

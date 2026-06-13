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
import ProductList from "./ProductList";
import ProductInfo from "./ProductInfo";
import Login from "./login";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="/userAbout" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/ApiExample" element={<APIexample />} />
          <Route path="/RHFExample" element={<RHFExample />} />
          <Route path="/userForm" element={<UserForm />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/newtodo" element={<NewToDo />} />
          <Route path="/prodListing" element={<ProductList />} />
          <Route path="/prodInfo/:prodId" element={<ProductInfo />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

//npm install react-hook-form zod @hookform/resolvers

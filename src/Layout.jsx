import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    return <h1>Please log in to access the site.</h1>;
  }

  return (
    <div>
      <nav>
        <Link to="/userAbout">About</Link> | <Link to="/contact">Contact</Link>{" "}
        | <Link to="/profile">Profile</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;

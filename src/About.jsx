import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p>About Page</p>

      <button onClick={() => navigate("/contact")}>To Contact</button>
    </div>
  );
};

export default About;

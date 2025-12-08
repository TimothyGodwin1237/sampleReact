import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p>Contacts Page</p>

      <button onClick={() => navigate("/userAbout")}>To About</button>
    </div>
  );
};

export default Contact;

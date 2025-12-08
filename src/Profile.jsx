import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { userId } = useParams();
  return (
    <div>
      <p>Profile : {userId}</p>
    </div>
  );
};

export default Profile;

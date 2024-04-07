import React, { useContext } from "react";
import userContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(userContext);

  if (!user) {
    return <h3>Please Login!</h3>;
  } else {
    return <div> Welcome {user.username}</div>;
  }
}

export default Profile;

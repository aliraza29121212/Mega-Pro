import React, { useContext, useState } from "react";
import userContext from "../context/UserContext";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(userContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) {
      alert("please fill the fields");
    } else {
      setUser({ username, password });
    }
  };

  return (
    <div className="flex bg-black">
      <h2 className="text-2xl">Login</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;

// src/Login/Login.js
import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implement your login logic here
    // For simplicity, we'll just display the username and password for now
    alert(`Username: ${username}\nPassword: ${password}`);
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
        <div className="input-container">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;

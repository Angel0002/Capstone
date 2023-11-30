import React, { useState } from "react";
import "./LoginPage.css"; // Ensure you have a corresponding CSS file for styling

function Login({ onNavigateBack }) {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log("Login:", email, password);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="button">
          Login
        </button>
        <button
          type="button"
          onClick={onNavigateBack}
          className="button back-button"
        >
          Back to Home
        </button>
      </form>
    </div>
  );
}

export default Login;

import React from "react";
import "./Homepage.css"; // Import your CSS file here

function Homepage() {
  return (
    <div className="page">
      <header className="header">
        <div className="content">
          <div className="image-container">
            <img
              src="https://media.istockphoto.com/id/482430364/photo/blue-wooden-wall-with-the-inscription-garage-sale.jpg?s=1024x1024&w=is&k=20&c=59RBAF6v6sbtJDIWLRWRbTIMlDoCUv3sCJNSIWAQbv8="
              className="image"
            />
            <div className="name">Garage Sale Finder</div>
          </div>
        </div>
      </header>
      <div className="button-Login-container">
        <button className="Login-button">Login</button>
        <button className="SignUp-button">SignUp</button>
      </div>

      <footer className="footer">
        Made with
        <span role="img" aria-label="Heart Emoji">
          ❤️
        </span>
        from Team Hex: <a href="https://github.com/Angel0002">Melis</a>
      </footer>
    </div>
  );
}

export default Homepage;

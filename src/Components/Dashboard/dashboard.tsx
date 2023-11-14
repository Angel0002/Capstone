import React, { useState } from "react";
import "./dashboard.css"; 

function searchLocation() {
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    // Implement your login logic here
    // For simplicity, we'll just display the username and password for now
    alert(`Location: ${location}`);
  };

  return (  //locations from search
    <div className="search-map">    
        <div className="input-container">
          <input
            type="text"
            placeholder="Location..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button type="button" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="map">
          Map
        </div>  
    </div>
  );
}

function savedSales() {
  return (
    <div className="saved">
    <div className="sidebar">
        <div className="name">
          Saved Sales
        </div>
        <ol>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
        </ol>
    </div>
    </div>
  );
}

function resultSales() {
  return (
    <div className="result">
    <div className="sidebar">
        <div className="name">
          Results
        </div>
        <ol>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
        </ol>
    </div>
    </div>
  );
}

function Dashboard(){
    return(
    <body>
      <div className="topbar">
      <div className="profile">
            <button type="button" >
              Name
            <img
                src="https://i.seadn.io/gcs/files/3085b3fc65f00b28699b43efb4434eec.png?auto=format&dpr=1&w=1000"
                className="pfp"
              />
          </button>
            </div>
          <div className="content">
            <div className="image-container">
              <img
                src="https://media.istockphoto.com/id/482430364/photo/blue-wooden-wall-with-the-inscription-garage-sale.jpg?s=1024x1024&w=is&k=20&c=59RBAF6v6sbtJDIWLRWRbTIMlDoCUv3sCJNSIWAQbv8="
                className="logo"
              />
            </div>
            <div className="name">Garage Sale Finder</div>
            
          </div>
          
      </div>

      <div className="lower-content">
        {savedSales()}
        {searchLocation()}
        {resultSales()}
      </div>
    </body>
  );
}

export default Dashboard;
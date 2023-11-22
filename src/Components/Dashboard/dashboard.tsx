import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./dashboard.css"; 

function SearchLocation() {
  const onLoad = (marker) => {
        console.log("marker: ", marker);
      };
  const mapStyles = [
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [
        { visibility: 'off' } // Hide points of interest labels
      ]
    }];
    const [location, setLocation] = useState("");
    const [userPosition, setUserPosition] = useState({ lat: 33.253946, lng: -97.152896 });
    const [validAddress, setAddressValidity] = useState(false);

    const handleSearch = async () => {
      try {
        // Perform geocoding to convert address to coordinates using a geocoding service
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(location)}&key=AIzaSyBqSTtw4vop05TMAcAXcdClNgIKApvgYVU`
        );
    
        if (response.ok) {
          const data = await response.json();
          if (data.results && data.results[0] && data.results[0].geometry) {
            const { lat, lng } = data.results[0].geometry.location;
            setUserPosition({ lat, lng });
            console.log("Its working!");
            setAddressValidity(true);
          } else {
            console.log(data);
            alert("Invalid address");
            setAddressValidity(false);
          }
        } else {
          console.error("Geocoding request failed");
          setAddressValidity(false);
        }
      } catch (error) {
        console.error("Error during geocoding:", error);
        setAddressValidity(false);
      }
    };

    const handleEnterKey = (e) => {
      if (e.key === 'Enter') {
        handleSearch(); // Trigger search function on Enter key press
      }
    };

    useEffect(() => {

      if (userPosition && userPosition.lat && userPosition.lng && validAddress) {
        console.log('userPosition updated:', userPosition);
      }
    }, [userPosition]);

  return (
    <div className="lower-content">
      <div className="search-map">
        <div className="input-container">
          <input
            type="text"
            placeholder="Location..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyDown={ handleEnterKey}
          />
          <button type="button" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="map">
            <GoogleMap
              mapContainerClassName="map"
              center={userPosition || { lat:  33.253946, lng: -97.152896 }}
              zoom={userPosition ? 17 : 1}
              options={{styles: mapStyles}}
            >
              
                {/* Conditionally render the Marker based on userPosition and validAddress */}
            {userPosition && validAddress && (
              <Marker
                onLoad={(marker) => console.log('marker:', marker)}
                position={userPosition}
                title="Your Location"
              />
            )}
              
            </GoogleMap>
        </div>
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

function userProfile(){
  // const handleForm = async () =>{
  //   if()
  // };

  return (
    <div className="profile">
            <button type="button" >
              {/* onClick={handleForm} */}
              Name
            <img
                src="https://i.seadn.io/gcs/files/3085b3fc65f00b28699b43efb4434eec.png?auto=format&dpr=1&w=1000"
                className="pfp"
              />
            
          </button>
          <div>

          </div>
            </div>
  );
}

function Dashboard(){
    return(
    <div className="page">
      <div className="topbar">
          {userProfile()}
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
      {/* before */}
      <div className="lower-content">
        {savedSales()}
        <LoadScript
          googleMapsApiKey="AIzaSyBqSTtw4vop05TMAcAXcdClNgIKApvgYVU"
        >
          <SearchLocation />
          {resultSales()}
        </LoadScript>
      </div>

      {/* after */}
      {/* <div className="lower-content">
        
        <LoadScript
          googleMapsApiKey="AIzaSyBqSTtw4vop05TMAcAXcdClNgIKApvgYVU"
        >
          <SearchLocation />
          {resultSales()}
        </LoadScript>
      </div> */}
    </div>
  );
}

export default Dashboard;

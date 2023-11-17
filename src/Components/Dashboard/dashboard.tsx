import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./dashboard.css"; 


// const center = {
//   lat: 19.1383,
//   lng: 77.321
// };

// const style = {
//   height: "300px",
//   width: "300px"
// };
// const Map = () => {
//   const onLoad = (marker) => {
//     console.log("marker: ", marker);
//   };
//   return (
//     <div className="map">
//       <LoadScript googleMapsApiKey="AIzaSyDLRmzWGSVuOYRHHFJ0vrEApxLuSVVgf1o">
//         <GoogleMap mapContainerStyle={style} zoom={15} center={center}>
//           <Marker onLoad={onLoad} position={center} />
//         </GoogleMap>
//       </LoadScript>
//     </div>
//   );
// };

// export default Map;

// function SearchLocation() {
//   const [location, setLocation] = useState("");

//   const handleSearch = () => {
//     // Implement your login logic here
//     // For simplicity, we'll just display the username and password for now
//     alert(`Location: ${location}`);
//   };

//   return (  //locations from search
//     <div className="search-map">    
//         <div className="input-container">
//           <input
//             type="text"
//             placeholder="Location..."
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//           />
//           <button type="button" onClick={handleSearch}>
//             Search
//           </button>
//         </div>
//         <div className="map">
//           Map
//         </div>  
//     </div>
//   );
// }

// function SearchLocation() {
//   const [location, setLocation] = useState("");
//   const [userPosition, setUserPosition] = useState({ lat: 0, lng: 0 });

//   const handleSearch = async () => {
//     try {
//       // Perform geocoding to convert address to coordinates using a geocoding service
//       const response = await fetch(
//         `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(location)}&key=AIzaSyBqSTtw4vop05TMAcAXcdClNgIKApvgYVU`
//       );
  
//       if (response.ok) {
//         const data = await response.json();
//         if (data.results && data.results[0] && data.results[0].geometry) {
//           const { lat, lng } = data.results[0].geometry.location;
//           setUserPosition({ lat, lng });
//           console.log("Its working!");
//         } else {
//           console.log(data);
//           console.error("No geometry/location found for the provided address.");
//         }
//       } else {
//         console.error("Geocoding request failed");
//       }
//     } catch (error) {
//       console.error("Error during geocoding:", error);
//     }
//   };
// }
function SearchLocation() {
  const onLoad = (marker) => {
        console.log("marker: ", marker);
      };
    const [location, setLocation] = useState("");
    const [userPosition, setUserPosition] = useState({ lat: 33.253946, lng: -97.152896 });
  
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
          } else {
            console.log(data);
            console.error("No geometry/location found for the provided address.");
          }
        } else {
          console.error("Geocoding request failed");
        }
      } catch (error) {
        console.error("Error during geocoding:", error);
      }
    };

 

  return (
    <div className="lower-content">
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
            <GoogleMap
              mapContainerClassName="map"
              center={userPosition || { lat:  33.253946, lng: -97.152896 }}
              zoom={userPosition ? 12 : 1}
            >
              
                <Marker onLoad={onLoad} position={userPosition} title="Your Location" />
              
            </GoogleMap>
        </div>
      </div>
    </div>
  );
}

// function SearchLocation() {
//   const mapStyles = {
//     height: "400px", // Define the height of the map
//     width: "100%"    // Define the width of the map
//   };

//   return (
//     <div style={mapStyles}>
//       <LoadScript googleMapsApiKey="AIzaSyDLRmzWGSVuOYRHHFJ0vrEApxLuSVVgf1o">
//         <GoogleMap
//           center={{ lat: 0, lng: 0 }}
//           zoom={12}
//         >
         
//         </GoogleMap>
//       </LoadScript>
//     </div>
//   );
//     }

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
    <>
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
        {/* {SearchLocation()}  */}
        {/* {searchLocation()} */}
        <LoadScript
          googleMapsApiKey="AIzaSyBqSTtw4vop05TMAcAXcdClNgIKApvgYVU"
        >
          <SearchLocation />
          {resultSales()}
        </LoadScript>
        
      </div>
    </>
  );
}

export default Dashboard;

>>>>>>> Stashed changes

// MapWidget.js
import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

const MapWidget = ({ buildings }: any) => {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 37.025946,
    longitude: -7.920038,
    zoom: 8,
  });

  const [selectedBuilding, setSelectedBuilding] = useState(null);

  useEffect(() => {
    if (buildings.length > 0) {
      // Set the initial viewport based on the first building's location
      setViewport((prevViewport) => ({
        ...prevViewport,
        latitude: buildings[0].Lat,
        longitude: buildings[0].Lon,
      }));
    }
  }, [buildings]);

  return (
    <div></div>
    // <ReactMapGL
    //   {...viewport}
    //   mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
    //   mapStyle="mapbox://styles/mapbox/streets-v11"
    //   onViewportChange={(viewport) => setViewport(viewport)}
    // >
    //   {buildings.map((building) => (
    //     <Marker
    //       key={building.Cpe}
    //       latitude={building.Lat}
    //       longitude={building.Lon}
    //     >
    //       <button
    //         className="marker-btn"
    //         onClick={(e) => {
    //           e.preventDefault();
    //           setSelectedBuilding(building);
    //         }}
    //       >
    //         🏢
    //       </button>
    //     </Marker>
    //   ))}

    //   {selectedBuilding && (
    //     <Popup
    //       latitude={selectedBuilding.Lat}
    //       longitude={selectedBuilding.Lon}
    //       onClose={() => setSelectedBuilding(null)}
    //     >
    //       <div>
    //         <h2>{selectedBuilding.Name}</h2>
    //         <p>{selectedBuilding.Fulladdress}</p>
    //       </div>
    //     </Popup>
    //   )}
    // </ReactMapGL>
  );
};

export default MapWidget;

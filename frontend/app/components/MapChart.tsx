import React, { useEffect } from 'react';
//@ts-ignore
import mapboxgl from 'mapbox-gl';

const sampleData = [
  {
    "Cpe": "CPE_1",
    "Lat": 37.025946,
    "Lon": -7.920038,
    "Name": "Building 1",
    "Fulladdress": "FullAddress 1"
  },
  {
    "Cpe": "CPE_2",
    "Lat": 38.502326,
    "Lon": -7.942025,
    "Name": "Building 2",
    "Fulladdress": "FullAddress 2"
  },
  {
    "Cpe": "CPE_3",
    "Lat": 39.101647,
    "Lon": -9.217271,
    "Name": "Building 3",
    "Fulladdress": "FullAddress 3"
  }
]
const MapChartComponent = ({ locations }: any) => {
  if (!locations || locations.length === 0) {
    locations = sampleData;
  }
  useEffect(() => {
    // Set your mapbox access token here, otherwise it shows a dark map
    mapboxgl.accessToken = 'YOUR_MAPBOX_KEY';

    if (locations && locations.length > 0) {
      // Calculate map bounds based on all locations
      const bounds = new mapboxgl.LngLatBounds();
      locations.forEach((location: { Lon: number, Lat: number }) => {
        bounds.extend([location.Lon, location.Lat]);
      });

      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: bounds.getCenter(),
        zoom: 6
      });


      locations.forEach((location: { Lon: number, Lat: number, Name: string, Fulladdress: string }) => {
        new mapboxgl.Marker()
          .setLngLat([location.Lon, location.Lat])
          .setPopup(new mapboxgl.Popup().setHTML(`<h3>${location.Name}</h3><p>${location.Fulladdress}</p>`))
          .addTo(map);
      });

      return () => {
        map.remove();
      };
    }
  }, [locations]);

  return <div id="map" style={{ height: '550px', width: '94vw', marginTop: '10px' }} />;
};

export default MapChartComponent;

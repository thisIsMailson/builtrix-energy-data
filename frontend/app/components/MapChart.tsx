import React, { useEffect } from 'react';
//@ts-ignore
import mapboxgl from 'mapbox-gl';

const MapChartComponent = ({ locations }: any) => {

  useEffect(() => {
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

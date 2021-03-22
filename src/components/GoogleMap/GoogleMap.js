import React from 'react'
import GoogleMapReact from 'google-map-react';

const GoogleMap = () => {

  const mapState = {
    center: {
      lat: 23.801443928832743,
      lng: 90.421696803548490
    },
    zoom: 11
  }
  return <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAYZ_37OWXyxVoc7sky7u_-ee2R576o1tA'}}
          defaultCenter={mapState.center}
          defaultZoom={mapState.zoom}
        />
        
   
  
}

export default GoogleMap

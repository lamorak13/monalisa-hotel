import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

function ContactMap(props) {
  return (
    <Map
      google={props.google}
      zoom={13}
      initialCenter={{ lat: -37.813809, lng: 144.954593 }}
      disableDefaultUI={true}
    >
      <Marker position={{ lat: -37.813742, lng: 144.954561 }} />
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBbsqjwtVpXsAxS3VkGz5pLcT8vStJDW1M',
})(ContactMap);

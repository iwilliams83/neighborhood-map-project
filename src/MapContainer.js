import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '50%',
  height: '100%'
};

// Source: https://scotch.io/tutorials/react-apps-with-the-google-maps-api-and-google-maps-react

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 40.7677733,
         lng: -73.9409858
        }}
      />
    );
  }
}



export default GoogleApiWrapper({
  apiKey: 'AIzaSyAFzHgk9cex507OuWCImdp0yykLbH23gew'
})(MapContainer);
